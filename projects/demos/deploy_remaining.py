#!/usr/bin/env python3
import os
import subprocess
import time
from pathlib import Path

remaining_showcases = [
    "showcase-boal-anderson",
    "showcase-brendan-kearney", 
    "showcase-caldwell-robinson",
    "showcase-dickson-mcnulty",
    "showcase-hampson-harvey",
    "showcase-hasson-co",
    "showcase-jack-mccann",
    "showcase-john-fahy",
    "showcase-kearney-law-group",
    "showcase-macaulay-wray",
    "showcase-mallon-co",
    "showcase-mkfi",
    "showcase-mcgee-solicitors",
    "showcase-paul-d-thompson",
    "showcase-quigley-grant-kyle",
    "showcase-bar-of-ni"
]

def deploy_showcase(slug):
    """Deploy a single showcase to GitHub Pages"""
    print(f"Deploying {slug}...")
    
    # Create temp directory
    temp_dir = f"/tmp/{slug}"
    subprocess.run(["rm", "-rf", temp_dir], check=False)
    os.makedirs(temp_dir)
    
    # Copy files
    current_dir = Path(__file__).parent
    source_file = current_dir / slug / "index.html"
    dest_file = Path(temp_dir) / "index.html"
    
    with open(source_file, 'r') as src, open(dest_file, 'w') as dst:
        dst.write(src.read())
    
    # Change to temp directory
    os.chdir(temp_dir)
    
    try:
        # Git init and commit
        subprocess.run(["git", "init", "--quiet"], check=True)
        subprocess.run(["git", "add", "."], check=True)
        
        firm_name = slug.replace("showcase-", "").replace("-", " ").title()
        subprocess.run(["git", "commit", "--quiet", "-m", f"Add {firm_name} AI showcase"], check=True)
        
        # Create GitHub repo
        result = subprocess.run(
            ["gh", "repo", "create", slug, "--public", "--source=.", "--push"],
            capture_output=True,
            text=True
        )
        
        if result.returncode != 0:
            print(f"    ❌ Failed to create repo: {result.stderr}")
            return False
            
        print(f"    ✓ Repository created")
        
        # Enable GitHub Pages
        time.sleep(2)  # Let repo settle
        pages_result = subprocess.run([
            "gh", "api", f"repos/albiemorgan88-hash/{slug}/pages", "-X", "POST",
            "-f", "build_type=legacy", "-f", "source[branch]=main", "-f", "source[path]=/"
        ], capture_output=True, text=True)
        
        if pages_result.returncode == 0:
            print(f"    ✓ Pages enabled: https://albiemorgan88-hash.github.io/{slug}/")
            return True
        else:
            print(f"    ⚠️  Pages setup may need manual activation")
            return True  # Repo created successfully
            
    except subprocess.CalledProcessError as e:
        print(f"    ❌ Error: {e}")
        return False
    finally:
        # Cleanup
        subprocess.run(["rm", "-rf", temp_dir], check=False)

def main():
    deployed = 1  # Already deployed showcase-babingtons-solicitors
    total = len(remaining_showcases) + 1
    
    print(f"🚀 Deploying {len(remaining_showcases)} remaining showcases...")
    print(f"    (showcase-babingtons-solicitors already deployed)")
    print()
    
    for i, slug in enumerate(remaining_showcases, 2):
        print(f"[{i}/{total}] {slug}")
        if deploy_showcase(slug):
            deployed += 1
        print()
    
    print(f"🎉 Deployment Complete!")
    print(f"    Successfully deployed: {deployed}/{total} showcases")
    print(f"    All use Blue Canvas AI branding")
    print(f"    Contact: contact@bluecanvas.ai")

if __name__ == '__main__':
    main()