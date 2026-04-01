#!/usr/bin/env python3
"""
Script to fix corrupted UK Trade Jobs guides.ts file.
Removes orphaned FAQ blocks and ensures valid TypeScript structure.
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
    inside_guide = False
    brace_count = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if we're starting a new guide object
        if re.match(r'\s*{\s*$', line) or re.match(r'\s*{$', line):
            inside_guide = True
            brace_count = 1
            fixed_lines.append(line)
            i += 1
            continue
        
        # If we're inside a guide object, track braces
        if inside_guide:
            brace_count += line.count('{') - line.count('}')
            fixed_lines.append(line)
            
            # If brace count reaches 0, we've closed the guide object
            if brace_count == 0:
                inside_guide = False
            
            i += 1
            continue
        
        # If we're outside a guide object
        if not inside_guide:
            # Keep the file structure (interface, export, array start)
            if (line.strip().startswith('export interface') or 
                line.strip().startswith('export const') or
                line.strip() in ['', '];', '[', ']']):
                fixed_lines.append(line)
                i += 1
                continue
            
            # Skip orphaned FAQ blocks and other orphaned content
            if (line.strip().startswith('faqs: [') or
                line.strip().startswith('{ question:') or
                line.strip().startswith('},') or
                line.strip() == '},'):
                # Skip this orphaned content
                i += 1
                continue
            
            # Keep other structural elements
            fixed_lines.append(line)
            i += 1
            continue
        
        i += 1
    
    # Write the fixed content
    with open('src/data/guides.ts', 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print("Fixed guides.ts file - removed orphaned FAQ blocks")

if __name__ == '__main__':
    fix_guides_file()