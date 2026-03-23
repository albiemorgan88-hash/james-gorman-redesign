#!/bin/bash

# Deploy all 16 showcases to GitHub Pages

SHOWCASES=(
    "showcase-asm-accountants"
    "showcase-aubrey-campbell" 
    "showcase-claremount"
    "showcase-corr-and-corr"
    "showcase-dnt-accountants"
    "showcase-ef-mccambridge"
    "showcase-fitzpatrick-kearney"
    "showcase-gmcg"
    "showcase-hm-accountants"
    "showcase-kps-accountants"
    "showcase-mci-accountants"
    "showcase-mj-kane"
    "showcase-mts-accountants"
    "showcase-muldoon"
    "showcase-pgm-accountants"
    "showcase-pgr-accountants"
)

# GitHub username
GH_USER="albiemorgan88-hash"

echo "Deploying ${#SHOWCASES[@]} showcases to GitHub Pages..."

for showcase in "${SHOWCASES[@]}"; do
    echo ""
    echo "🚀 Deploying $showcase..."
    
    # Create temp directory
    TEMP_DIR="/tmp/$showcase"
    rm -rf "$TEMP_DIR"
    mkdir -p "$TEMP_DIR"
    
    # Copy HTML file
    cp "/Users/philsagent/.openclaw/workspace/projects/demos/$showcase/index.html" "$TEMP_DIR/"
    
    cd "$TEMP_DIR"
    
    # Initialize git repo
    git init
    git add .
    git commit -m "Initial commit: $showcase"
    
    # Create GitHub repo and push
    echo "Creating GitHub repo: $showcase"
    gh repo create "$showcase" --public --source=. --push --description="Blue Canvas AI showcase for accountancy firm"
    
    # Enable GitHub Pages
    echo "Enabling GitHub Pages for $showcase"
    gh api repos/$GH_USER/$showcase/pages -X POST \
        -f "build_type=legacy" \
        -f "source[branch]=main" \
        -f "source[path]=/"
    
    echo "✅ $showcase deployed to https://$GH_USER.github.io/$showcase/"
    
    # Clean up
    cd /
    rm -rf "$TEMP_DIR"
    
    # Small delay to avoid rate limiting
    sleep 2
done

echo ""
echo "🎉 All showcases deployed successfully!"
echo ""
echo "GitHub Pages URLs:"
for showcase in "${SHOWCASES[@]}"; do
    echo "- https://$GH_USER.github.io/$showcase/"
done