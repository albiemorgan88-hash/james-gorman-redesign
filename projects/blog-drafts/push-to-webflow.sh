#!/bin/bash
# Push blog drafts to Webflow CMS as DRAFT items
source ~/.zprofile

COLLECTION_ID="67e4825804e6baf1d5246f5b"
API_URL="https://api.webflow.com/v2/collections/${COLLECTION_ID}/items"
SUCCESS=0
FAIL=0
ITEM_IDS=""

# Function to convert markdown body to HTML
md_to_html() {
  local body="$1"
  local html=""
  local in_list=0
  
  while IFS= read -r line; do
    # Skip empty lines but close list if open
    if [[ -z "$line" ]]; then
      if [[ $in_list -eq 1 ]]; then
        html+="</ul>"
        in_list=0
      fi
      continue
    fi
    
    # Skip tables (| lines)
    if [[ "$line" == \|* ]]; then
      continue
    fi
    
    # List items
    if [[ "$line" == "- "* ]]; then
      if [[ $in_list -eq 0 ]]; then
        html+="<ul>"
        in_list=1
      fi
      local item="${line#- }"
      # Convert bold
      item=$(echo "$item" | sed 's/\*\*\([^*]*\)\*\*/<strong>\1<\/strong>/g')
      # Convert links
      item=$(echo "$item" | sed 's/\[\([^]]*\)\](\([^)]*\))/<a href="\2">\1<\/a>/g')
      html+="<li>${item}</li>"
      continue
    fi
    
    # Close list if we hit non-list content
    if [[ $in_list -eq 1 ]]; then
      html+="</ul>"
      in_list=0
    fi
    
    # H3
    if [[ "$line" == "### "* ]]; then
      local heading="${line#\#\#\# }"
      heading=$(echo "$heading" | sed 's/\*\*\([^*]*\)\*\*/<strong>\1<\/strong>/g')
      html+="<h3>${heading}</h3>"
      continue
    fi
    
    # H2
    if [[ "$line" == "## "* ]]; then
      local heading="${line#\#\# }"
      heading=$(echo "$heading" | sed 's/\*\*\([^*]*\)\*\*/<strong>\1<\/strong>/g')
      html+="<h2>${heading}</h2>"
      continue
    fi
    
    # Skip H1 (title)
    if [[ "$line" == "# "* ]]; then
      continue
    fi
    
    # Blockquotes
    if [[ "$line" == "> "* ]]; then
      local quote="${line#> }"
      quote=$(echo "$quote" | sed 's/\*\*\([^*]*\)\*\*/<strong>\1<\/strong>/g')
      quote=$(echo "$quote" | sed 's/\[\([^]]*\)\](\([^)]*\))/<a href="\2">\1<\/a>/g')
      html+="<blockquote><p>${quote}</p></blockquote>"
      continue
    fi
    
    # Regular paragraph
    local para="$line"
    # Convert bold
    para=$(echo "$para" | sed 's/\*\*\([^*]*\)\*\*/<strong>\1<\/strong>/g')
    # Convert links
    para=$(echo "$para" | sed 's/\[\([^]]*\)\](\([^)]*\))/<a href="\2">\1<\/a>/g')
    html+="<p>${para}</p>"
    
  done <<< "$body"
  
  # Close any open list
  if [[ $in_list -eq 1 ]]; then
    html+="</ul>"
  fi
  
  echo "$html"
}

# Function to derive category from target keyword
derive_category() {
  local keyword="$1"
  keyword=$(echo "$keyword" | tr '[:upper:]' '[:lower:]')
  
  if [[ "$keyword" == *"audit"* ]] || [[ "$keyword" == *"readiness"* ]]; then
    echo "AI Strategy"
  elif [[ "$keyword" == *"recruitment"* ]] || [[ "$keyword" == *"accountant"* ]] || [[ "$keyword" == *"professional services"* ]]; then
    echo "AI for Business"
  elif [[ "$keyword" == *"policy"* ]] || [[ "$keyword" == *"security"* ]] || [[ "$keyword" == *"compliance"* ]] || [[ "$keyword" == *"ai act"* ]]; then
    echo "AI Governance"
  elif [[ "$keyword" == *"automation"* ]] || [[ "$keyword" == *"agent"* ]]; then
    echo "AI Automation"
  elif [[ "$keyword" == *"consultant"* ]] || [[ "$keyword" == *"consulting"* ]]; then
    echo "AI Consulting"
  elif [[ "$keyword" == *"plan"* ]] || [[ "$keyword" == *"grant"* ]] || [[ "$keyword" == *"fund"* ]]; then
    echo "AI Strategy"
  elif [[ "$keyword" == *"training"* ]] || [[ "$keyword" == *"staff"* ]]; then
    echo "AI Training"
  else
    echo "AI for Business"
  fi
}

# Function to escape JSON string
json_escape() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  s="${s//$'\n'/\\n}"
  s="${s//$'\r'/}"
  s="${s//$'\t'/\\t}"
  echo "$s"
}

echo "Reading blog drafts file..."

# Read the file content
FILE_CONTENT=$(cat /Users/philsagent/.openclaw/workspace/projects/blog-drafts/batch-2026-03-01.md)

# Process each post using Python for reliable parsing
python3 << 'PYEOF'
import json
import re
import subprocess
import time
import os

file_path = "/Users/philsagent/.openclaw/workspace/projects/blog-drafts/batch-2026-03-01.md"

with open(file_path, 'r') as f:
    content = f.read()

# Split into posts
posts = re.split(r'\n---\s*\n\s*\n---\s*\n', content)
# Handle edge cases - also try single separator
if len(posts) < 10:
    # Try splitting differently
    posts = re.split(r'\n---\s*\n(?=# POST |\n# POST )', content)

# Clean up - also handle the file starting with ---
cleaned_posts = []
for p in posts:
    p = p.strip()
    if p and '# POST' in p:
        cleaned_posts.append(p)

posts = cleaned_posts
print(f"Found {len(posts)} posts")

def md_to_html(body):
    """Convert markdown body to HTML"""
    lines = body.split('\n')
    html_parts = []
    in_list = False
    
    for line in lines:
        stripped = line.strip()
        
        # Skip empty lines
        if not stripped:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            continue
        
        # Skip table rows
        if stripped.startswith('|'):
            continue
        
        # List items
        if stripped.startswith('- '):
            if not in_list:
                html_parts.append('<ul>')
                in_list = True
            item = stripped[2:]
            item = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', item)
            item = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', item)
            html_parts.append(f'<li>{item}</li>')
            continue
        
        # Close list if needed
        if in_list:
            html_parts.append('</ul>')
            in_list = False
        
        # H3
        if stripped.startswith('### '):
            heading = stripped[4:]
            heading = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', heading)
            html_parts.append(f'<h3>{heading}</h3>')
            continue
        
        # H2
        if stripped.startswith('## '):
            heading = stripped[3:]
            heading = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', heading)
            html_parts.append(f'<h2>{heading}</h2>')
            continue
        
        # Skip H1
        if stripped.startswith('# '):
            continue
        
        # Blockquotes
        if stripped.startswith('> '):
            quote = stripped[2:]
            quote = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', quote)
            quote = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', quote)
            html_parts.append(f'<blockquote><p>{quote}</p></blockquote>')
            continue
        
        # Regular paragraph
        para = stripped
        para = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', para)
        para = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', para)
        html_parts.append(f'<p>{para}</p>')
    
    if in_list:
        html_parts.append('</ul>')
    
    return ''.join(html_parts)

def derive_category(keyword):
    kw = keyword.lower()
    if 'audit' in kw or 'readiness' in kw:
        return 'AI Strategy'
    elif 'recruitment' in kw or 'accountant' in kw or 'professional services' in kw:
        return 'AI for Business'
    elif 'policy' in kw or 'security' in kw or 'compliance' in kw:
        return 'AI Governance'
    elif 'automation' in kw or 'agent' in kw:
        return 'AI Automation'
    elif 'consultant' in kw or 'consulting' in kw:
        return 'AI Consulting'
    elif 'plan' in kw or 'grant' in kw:
        return 'AI Strategy'
    else:
        return 'AI for Business'

API_TOKEN = os.environ.get('WEBFLOW_API_TOKEN', '')
if not API_TOKEN:
    print("ERROR: WEBFLOW_API_TOKEN not set!")
    exit(1)

COLLECTION_ID = "67e4825804e6baf1d5246f5b"
API_URL = f"https://api.webflow.com/v2/collections/{COLLECTION_ID}/items"

success = 0
fail = 0
item_ids = []
errors = []

for i, post_text in enumerate(posts):
    # Extract metadata
    title_match = re.search(r'Title:\s*(.+)', post_text)
    slug_match = re.search(r'Slug:\s*(.+)', post_text)
    meta_match = re.search(r'Meta Description:\s*(.+)', post_text)
    keyword_match = re.search(r'Target Keyword:\s*(.+)', post_text)
    
    if not all([title_match, slug_match, meta_match, keyword_match]):
        print(f"POST {i+1}: Could not parse metadata, skipping")
        fail += 1
        errors.append(f"POST {i+1}: metadata parsing failed")
        continue
    
    title = title_match.group(1).strip()
    slug = slug_match.group(1).strip()
    meta_desc = meta_match.group(1).strip()
    keyword = keyword_match.group(1).strip()
    
    # Extract body (everything after the metadata header block and the markdown H1)
    # Find the body start - after Target Keyword line and the next "---" or H1
    body_match = re.search(r'Target Keyword:[^\n]+\n+---\s*\n+(.*)', post_text, re.DOTALL)
    if not body_match:
        # Try without ---
        body_match = re.search(r'Target Keyword:[^\n]+\n+(.*)', post_text, re.DOTALL)
    
    if body_match:
        body = body_match.group(1).strip()
    else:
        body = post_text
    
    html_body = md_to_html(body)
    category = derive_category(keyword)
    seo_title = f"{title} | Blue Canvas"
    
    payload = {
        "fieldData": {
            "name": title,
            "slug": slug,
            "seo-title": seo_title,
            "blog-details": html_body,
            "blog-main-details": meta_desc,
            "category": category,
            "author-name": "Phil Patterson"
        },
        "isDraft": True
    }
    
    print(f"\nPOST {i+1}: {title}")
    print(f"  Slug: {slug}")
    print(f"  Category: {category}")
    
    # Make the API call
    import urllib.request
    import urllib.error
    
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {API_TOKEN}',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            item_id = result.get('id', 'unknown')
            print(f"  ✅ Created (ID: {item_id})")
            success += 1
            item_ids.append(f"POST {i+1}: {title} → {item_id}")
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        print(f"  ❌ Failed: {e.code} - {error_body}")
        fail += 1
        errors.append(f"POST {i+1} ({title}): {e.code} - {error_body}")
    except Exception as e:
        print(f"  ❌ Failed: {str(e)}")
        fail += 1
        errors.append(f"POST {i+1} ({title}): {str(e)}")
    
    # Rate limiting - 1 second delay
    if i < len(posts) - 1:
        time.sleep(1)

print(f"\n{'='*60}")
print(f"RESULTS: {success} succeeded, {fail} failed out of {len(posts)} posts")
print(f"\nCreated items:")
for item in item_ids:
    print(f"  {item}")
if errors:
    print(f"\nErrors:")
    for err in errors:
        print(f"  {err}")

PYEOF
