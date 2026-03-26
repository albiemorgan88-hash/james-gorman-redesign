#!/usr/bin/env python3
"""
Validate the local-site-hunter skill meets AgentSkills spec
"""

import os
import yaml

def validate_skill():
    """Validate skill structure and content"""
    
    skill_dir = os.path.dirname(__file__)
    errors = []
    warnings = []
    
    # Check SKILL.md exists
    skill_md = os.path.join(skill_dir, 'SKILL.md')
    if not os.path.exists(skill_md):
        errors.append("SKILL.md is missing")
        return errors, warnings
    
    # Read and validate SKILL.md
    with open(skill_md, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check frontmatter
    if not content.startswith('---\n'):
        errors.append("SKILL.md must start with YAML frontmatter")
    
    # Extract frontmatter
    try:
        end_idx = content.find('\n---\n', 4)
        if end_idx == -1:
            errors.append("SKILL.md frontmatter not properly closed")
        else:
            frontmatter_text = content[4:end_idx]
            frontmatter = yaml.safe_load(frontmatter_text)
            
            # Check required fields
            if 'name' not in frontmatter:
                errors.append("Missing 'name' in frontmatter")
            elif frontmatter['name'] != 'local-site-hunter':
                errors.append(f"Name should be 'local-site-hunter', got '{frontmatter['name']}'")
            
            if 'description' not in frontmatter:
                errors.append("Missing 'description' in frontmatter")
            elif len(frontmatter['description']) < 50:
                warnings.append("Description seems too short")
                
    except Exception as e:
        errors.append(f"Invalid YAML frontmatter: {str(e)}")
    
    # Check scripts directory
    scripts_dir = os.path.join(skill_dir, 'scripts')
    if not os.path.exists(scripts_dir):
        errors.append("scripts/ directory is missing")
    else:
        scripts = os.listdir(scripts_dir)
        if not scripts:
            warnings.append("scripts/ directory is empty")
        
        # Check for executable permissions
        for script in scripts:
            if script.endswith('.py'):
                script_path = os.path.join(scripts_dir, script)
                if not os.access(script_path, os.X_OK):
                    warnings.append(f"{script} is not executable")
    
    # Check file sizes
    skill_size = os.path.getsize(skill_md)
    if skill_size > 50000:  # 50KB
        warnings.append(f"SKILL.md is large ({skill_size} bytes), consider using references/")
    
    return errors, warnings

def main():
    print("🔍 Validating local-site-hunter skill...")
    
    errors, warnings = validate_skill()
    
    if errors:
        print("\n❌ ERRORS:")
        for error in errors:
            print(f"  • {error}")
    
    if warnings:
        print("\n⚠️  WARNINGS:")
        for warning in warnings:
            print(f"  • {warning}")
    
    if not errors and not warnings:
        print("✅ Skill validation passed!")
    elif not errors:
        print("✅ Skill validation passed with warnings")
    else:
        print("❌ Skill validation failed")
        return 1
    
    # Show skill summary
    print("\n📋 Skill Summary:")
    print(f"  Name: local-site-hunter")
    print(f"  Location: ~/.openclaw/workspace/skills/local-site-hunter/")
    
    scripts_dir = os.path.join(os.path.dirname(__file__), 'scripts')
    if os.path.exists(scripts_dir):
        scripts = [f for f in os.listdir(scripts_dir) if f.endswith('.py')]
        print(f"  Scripts: {len(scripts)}")
        for script in scripts:
            print(f"    • {script}")
    
    return 0

if __name__ == '__main__':
    exit(main())