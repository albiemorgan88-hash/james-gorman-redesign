#!/usr/bin/env python3
"""
Final cleanup - find all orphaned FAQ blocks and remove them in one pass
"""
import re

def final_cleanup():
    with open('src/data/guides.ts', 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    clean_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line is an orphaned faqs: [
        if re.match(r'\s*faqs:\s*\[\s*$', line):
            # Look back a few lines to check if this is part of a proper guide
            look_back_lines = lines[max(0, i-10):i]
            look_back_text = '\n'.join(look_back_lines)
            
            # If we don't see the guide structure elements in the previous lines,
            # this is likely an orphaned FAQ block
            if not ('slug:' in look_back_text and 'title:' in look_back_text):
                print(f"Removing orphaned FAQ block starting at line {i+1}")
                # Skip this entire FAQ block
                i += 1  # Skip the faqs: [ line
                while i < len(lines):
                    if lines[i].strip() == '},':
                        i += 1  # Skip the closing },
                        break
                    i += 1
                continue
        
        # Keep this line
        clean_lines.append(line)
        i += 1
    
    # Write the cleaned content
    with open('src/data/guides.ts', 'w') as f:
        f.write('\n'.join(clean_lines))
    
    print("Final cleanup completed")

if __name__ == '__main__':
    final_cleanup()