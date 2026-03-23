#!/bin/bash

# Deploy all 17 solicitor showcases to GitHub Pages
set -e

# Check if gh CLI is authenticated
if ! gh auth status >/dev/null 2>&1; then
    echo "❌ GitHub CLI not authenticated. Run 'gh auth login' first."
    exit 1
fi

SHOWCASES=(
    "showcase-babingtons-solicitors"
    "showcase-boal-anderson"
    "showcase-brendan-kearney"
    "showcase-caldwell-robinson"
    "showcase-dickson-mcnulty"
    "showcase-hampson-harvey"
    "showcase-hasson-co"
    "showcase-jack-mccann"
    "showcase-john-fahy"
    "showcase-kearney-law-group"
    "showcase-macaulay-wray"
    "showcase-mallon-co"
    "showcase-mkfi"
    "showcase-mcgee-solicitors"
    "showcase-paul-d-thompson"
    "showcase-quigley-grant-kyle"
    "showcase-bar-of-ni"
)

DEPLOYED=0
TOTAL=${#SHOWCASES[@]}

echo "🚀 Deploying $TOTAL solicitor showcases to GitHub Pages..."
echo

for i in "${!SHOWCASES[@]}"; do
    SLUG="${SHOWCASES[$i]}"
    NUM=$((i + 1))
    
    echo "[$NUM/$TOTAL] Deploying $SLUG..."
    
    # Create temp directory for Git operations
    TEMP_DIR="/tmp/$SLUG"
    rm -rf "$TEMP_DIR"
    mkdir -p "$TEMP_DIR"
    
    # Copy showcase HTML as index.html
    cp "$(pwd)/$SLUG/index.html" "$TEMP_DIR/index.html"
    
    cd "$TEMP_DIR"
    
    # Initialize Git repo
    git init --quiet
    git add .
    git commit --quiet -m "Add $(echo $SLUG | sed 's/showcase-//' | sed 's/-/ /g') AI showcase"
    
    # Create GitHub repo and push
    if gh repo create "$SLUG" --public --source=. --push 2>/dev/null; then
        echo "    ✓ Repository created and pushed"
        
        # Enable GitHub Pages
        sleep 2  # Brief pause to let repo settle
        if gh api repos/albiemorgan88-hash/"$SLUG"/pages -X POST \
            -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1; then
            echo "    ✓ GitHub Pages enabled"
            echo "    🌐 https://albiemorgan88-hash.github.io/$SLUG/"
            DEPLOYED=$((DEPLOYED + 1))
        else
            echo "    ⚠️  Pages setup may need manual activation"
        fi
    else
        echo "    ❌ Failed to create repository"
    fi
    
    # Cleanup
    cd - >/dev/null
    rm -rf "$TEMP_DIR"
    echo
done

echo "🎉 Deployment Summary:"
echo "    Successfully deployed: $DEPLOYED/$TOTAL showcases"
echo "    All showcases use Blue Canvas AI branding"
echo "    Contact: contact@bluecanvas.ai"
echo
echo "📋 URLs saved in: ~/.openclaw/workspace/reports/hunter/2026-03-23-solicitors-showcase-map.md"