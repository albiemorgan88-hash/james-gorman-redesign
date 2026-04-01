#!/usr/bin/env python3
"""
Robust script to fix corrupted UK Trade Jobs guides.ts file.
Removes ALL orphaned FAQ blocks and ensures valid TypeScript structure.
"""
import re
import sys

def fix_guides_file():
    """Fix the guides.ts file by removing orphaned FAQ blocks."""
    
    # Read the original file
    with open('src/data/guides.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split into lines for processing
    lines = content.split('\n')
    
    fixed_lines = []
    i = 0
    inside_guide_object = False
    brace_count = 0
    
    # Keep track of valid guide structure
    guide_start_pattern = re.compile(r'\s*{\s*$')
    slug_pattern = re.compile(r'\s*slug:\s*[\'"][^\'\"]+[\'"],?\s*$')
    orphaned_faq_pattern = re.compile(r'\s*faqs:\s*\[\s*$')
    
    while i < len(lines):
        line = lines[i]
        
        # Check for file structure elements (always keep)
        if (line.strip().startswith('export interface') or 
            line.strip().startswith('export const') or 
            line.strip() == 'export const careerGuides: CareerGuide[] = [' or
            line.strip() == '];' or
            line.strip() == ''):
            fixed_lines.append(line)
            i += 1
            continue
        
        # Check if we're starting a new guide object
        if guide_start_pattern.match(line):
            # Look ahead to see if this is followed by a slug (valid guide)
            next_few_lines = lines[i+1:i+5] if i+1 < len(lines) else []
            has_slug = any(slug_pattern.match(next_line) for next_line in next_few_lines)
            
            if has_slug:
                # This is a valid guide object
                inside_guide_object = True
                brace_count = 1
                fixed_lines.append(line)
                i += 1
                continue
            else:
                # Skip this invalid object
                i += 1
                continue
        
        # If we're inside a valid guide object
        if inside_guide_object:
            # Track braces
            brace_count += line.count('{') - line.count('}')
            fixed_lines.append(line)
            
            # If brace count reaches 0, we've closed the guide object
            if brace_count <= 0:
                inside_guide_object = False
                brace_count = 0
            
            i += 1
            continue
        
        # If we're outside a guide object, check for orphaned content
        if not inside_guide_object:
            # Skip orphaned FAQ blocks and related content
            if (orphaned_faq_pattern.match(line) or
                line.strip().startswith('{ question:') or
                line.strip().startswith('},') or
                line.strip() == '},' or
                line.strip() == '},'):
                # Skip orphaned content
                i += 1
                continue
            
            # Skip orphaned closing brackets
            if line.strip() in ['],', ']', '},']:
                i += 1
                continue
            
            # Keep anything else (shouldn't be much at this level)
            # But be conservative - only add if it looks structural
            if line.strip() == '' or line.strip() == ',':
                fixed_lines.append(line)
            
            i += 1
            continue
        
        i += 1
    
    # Write the fixed content
    with open('src/data/guides.ts', 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print("Fixed guides.ts file - removed all orphaned FAQ blocks and content")

if __name__ == '__main__':
    fix_guides_file()