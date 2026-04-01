#!/usr/bin/env python3
"""
Extract only valid, complete guide objects from corrupted guides.ts
"""
import re
import json

def extract_valid_guides():
    """Extract complete guide objects and rebuild the file."""
    
    with open('src/data/guides.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the interface definition
    interface_start = content.find('export interface CareerGuide {')
    interface_end = content.find('}', interface_start) + 1
    interface_def = content[interface_start:interface_end]
    
    # Find the start of the array
    array_start = content.find('export const careerGuides: CareerGuide[] = [')
    
    # Split into lines starting from array content
    lines = content[array_start:].split('\n')[1:]  # Skip the array declaration line
    
    valid_guides = []
    current_guide_lines = []
    inside_guide = False
    brace_count = 0
    
    for line in lines:
        if line.strip() == '];':  # End of array
            break
            
        if line.strip() == '{' and not inside_guide:
            # Starting new guide
            inside_guide = True
            brace_count = 1
            current_guide_lines = [line]
            continue
        
        if inside_guide:
            current_guide_lines.append(line)
            brace_count += line.count('{') - line.count('}')
            
            if brace_count == 0:
                # End of this guide object
                inside_guide = False
                
                # Check if this guide has a slug (valid guide)
                guide_text = '\n'.join(current_guide_lines)
                if 'slug:' in guide_text and 'faqs:' in guide_text:
                    valid_guides.append(guide_text)
                
                current_guide_lines = []
    
    # Rebuild the file
    new_content = interface_def + '\n\n'
    new_content += 'export const careerGuides: CareerGuide[] = [\n'
    
    for i, guide in enumerate(valid_guides):
        new_content += guide
        if i < len(valid_guides) - 1:  # Add comma except for last guide
            new_content += ',\n'
        else:
            new_content += '\n'
    
    new_content += '];\n'
    
    # Write the rebuilt file
    with open('src/data/guides.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Extracted {len(valid_guides)} valid guides and rebuilt the file")

if __name__ == '__main__':
    extract_valid_guides()