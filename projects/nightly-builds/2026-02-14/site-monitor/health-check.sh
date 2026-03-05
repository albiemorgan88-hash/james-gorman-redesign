#!/bin/bash
# Site Health Monitor - Health Check Script
# Checks HTTP status, response time, SSL, sitemap, robots.txt, meta title, PageSpeed, Google indexing

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_FILE="$SCRIPT_DIR/health-data.json"
SITES=("bluecanvas.ai" "openclawconsultant.co.uk" "zapierconsultant.co.uk" "aiagentsetup.co.uk")
PAGESPEED_KEY="AIzaSyCXH-dc-6qmufDPEIaaWEAc8APLaY0dluo"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "🔍 Site Health Monitor - $(date)"
echo "================================"

json_results='{"timestamp":"'"$TIMESTAMP"'","sites":['

first=true
for site in "${SITES[@]}"; do
  echo ""
  echo "Checking $site..."
  url="https://$site"
  issues=()

  # HTTP status & response time
  http_code=$(curl -s -o /dev/null -L -w "%{http_code}" --max-time 15 "$url" 2>/dev/null)
  response_time=$(curl -s -o /dev/null -L -w "%{time_total}" --max-time 15 "$url" 2>/dev/null)
  response_time_ms=$(echo "$response_time * 1000" | bc 2>/dev/null | cut -d. -f1)
  
  if [ "$http_code" != "200" ]; then
    issues+=("HTTP status: $http_code")
  fi
  if [ "${response_time_ms:-0}" -gt 3000 ] 2>/dev/null; then
    issues+=("Slow response: ${response_time_ms}ms")
  fi

  # SSL certificate
  ssl_expiry=$(echo | openssl s_client -servername "$site" -connect "$site:443" 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
  ssl_days_left=""
  ssl_valid="false"
  if [ -n "$ssl_expiry" ]; then
    expiry_epoch=$(date -j -f "%b %d %T %Y %Z" "$ssl_expiry" +%s 2>/dev/null || date -d "$ssl_expiry" +%s 2>/dev/null)
    now_epoch=$(date +%s)
    if [ -n "$expiry_epoch" ]; then
      ssl_days_left=$(( (expiry_epoch - now_epoch) / 86400 ))
      if [ "$ssl_days_left" -gt 0 ]; then
        ssl_valid="true"
      fi
      if [ "$ssl_days_left" -lt 14 ]; then
        issues+=("SSL expires in ${ssl_days_left} days")
      fi
    fi
  else
    issues+=("SSL certificate check failed")
  fi

  # Sitemap
  sitemap_status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$url/sitemap.xml" 2>/dev/null)
  sitemap_valid="false"
  if [ "$sitemap_status" = "200" ]; then
    sitemap_content=$(curl -s --max-time 10 "$url/sitemap.xml" 2>/dev/null)
    if echo "$sitemap_content" | grep -q "<urlset\|<sitemapindex"; then
      sitemap_valid="true"
    else
      issues+=("Sitemap exists but may be invalid")
    fi
  else
    issues+=("No sitemap.xml found")
  fi

  # Robots.txt
  robots_status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$url/robots.txt" 2>/dev/null)
  robots_exists="false"
  if [ "$robots_status" = "200" ]; then
    robots_exists="true"
  else
    issues+=("No robots.txt found")
  fi

  # Meta title
  page_html=$(curl -s --max-time 10 "$url" 2>/dev/null)
  meta_title=$(echo "$page_html" | grep -oi '<title>[^<]*</title>' | head -1 | sed 's/<[^>]*>//g')
  has_title="false"
  if [ -n "$meta_title" ]; then
    has_title="true"
  else
    issues+=("No meta title found")
  fi

  # PageSpeed
  echo "  Fetching PageSpeed score..."
  ps_response=$(curl -s --max-time 60 "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${PAGESPEED_KEY}&strategy=mobile" 2>/dev/null)
  pagespeed_score=$(echo "$ps_response" | python3 -c "import sys,json; d=json.load(sys.stdin); print(int(d['lighthouseResult']['categories']['performance']['score']*100))" 2>/dev/null)
  if [ -z "$pagespeed_score" ]; then
    pagespeed_score="null"
    issues+=("PageSpeed check failed")
  elif [ "$pagespeed_score" -lt 50 ] 2>/dev/null; then
    issues+=("Low PageSpeed score: $pagespeed_score")
  fi

  # Google indexing check via SearXNG
  echo "  Checking Google indexing..."
  indexed="unknown"
  searx_result=$(curl -s --max-time 10 "http://localhost:8888/search?q=site:${site}&format=json" 2>/dev/null)
  if [ -n "$searx_result" ]; then
    result_count=$(echo "$searx_result" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('results',[])))" 2>/dev/null)
    if [ "${result_count:-0}" -gt 0 ] 2>/dev/null; then
      indexed="true"
    else
      indexed="false"
      issues+=("Not found in search results")
    fi
  fi

  # Determine status
  status="green"
  if [ ${#issues[@]} -gt 0 ]; then
    status="amber"
  fi
  if [ "$http_code" != "200" ] || [ "$ssl_valid" = "false" ]; then
    status="red"
  fi

  # Build JSON for this site
  issues_json="["
  first_issue=true
  for issue in "${issues[@]}"; do
    if [ "$first_issue" = true ]; then first_issue=false; else issues_json+=","; fi
    issues_json+="\"$(echo "$issue" | sed 's/"/\\"/g')\""
  done
  issues_json+="]"

  escaped_title=$(echo "$meta_title" | sed 's/"/\\"/g' | tr '\n' ' ')

  site_json="{\"domain\":\"$site\",\"url\":\"$url\",\"status\":\"$status\",\"http_code\":\"$http_code\",\"response_time_ms\":${response_time_ms:-0},\"ssl_valid\":$ssl_valid,\"ssl_days_left\":${ssl_days_left:-0},\"sitemap_valid\":$sitemap_valid,\"robots_exists\":$robots_exists,\"meta_title\":\"$escaped_title\",\"has_title\":$has_title,\"pagespeed_score\":$pagespeed_score,\"indexed\":\"$indexed\",\"issues\":$issues_json}"

  if [ "$first" = true ]; then first=false; else json_results+=","; fi
  json_results+="$site_json"

  echo "  Status: $status | HTTP: $http_code | Speed: ${response_time_ms:-?}ms | SSL: $ssl_valid | PageSpeed: $pagespeed_score"
done

json_results+=']}'

echo "$json_results" | python3 -m json.tool > "$OUTPUT_FILE" 2>/dev/null || echo "$json_results" > "$OUTPUT_FILE"

echo ""
echo "================================"
echo "✅ Results saved to $OUTPUT_FILE"
