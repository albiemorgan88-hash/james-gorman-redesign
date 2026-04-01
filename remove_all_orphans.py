#!/usr/bin/env python3
"""
Remove all orphaned FAQ blocks by pattern matching
"""
import re

def remove_orphaned_faqs():
    with open('src/data/guides.ts', 'r') as f:
        content = f.read()
    
    # Find all orphaned FAQ blocks that are not inside proper guide objects
    # Pattern: faqs: [ followed by questions/answers, ending with ],
    # but NOT preceded by proper guide structure
    
    # Split content into lines for processing
    lines = content.split('\n')
    
    output_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check if this is an orphaned FAQ block
        if re.match(r'\s*faqs:\s*\[\s*$', line):
            # Look backward to see if this is part of a valid guide object
            # A valid guide should have slug, title, trade, etc. before the faqs
            look_back = 20  # Look back 20 lines
            start_idx = max(0, i - look_back)
            previous_lines = '\n'.join(lines[start_idx:i])
            
            # If previous lines don't contain guide fields, this is orphaned
            if not ('slug:' in previous_lines and 'title:' in previous_lines and 'trade:' in previous_lines):
                # This is an orphaned FAQ block - skip it and all following FAQ content
                print(f"Removing orphaned FAQ block starting at line {i+1}")
                i += 1  # Skip the "faqs: [" line
                
                # Skip until we find the closing ],
                brace_count = 1
                while i < len(lines) and brace_count > 0:
                    current_line = lines[i]
                    if current_line.strip() == '],':
                        brace_count -= 1
                        if brace_count == 0:
                            i += 1  # Skip the closing ],
                            break
                    i += 1
                continue
            else:
                # This is a valid FAQ block, keep it
                output_lines.append(line)
                i += 1
                continue
        
        # Keep all other lines
        output_lines.append(line)
        i += 1
    
    # Write the cleaned content
    with open('src/data/guides.ts', 'w') as f:
        f.write('\n'.join(output_lines))
    
    print("Removed all orphaned FAQ blocks")

if __name__ == '__main__':
    remove_orphaned_faqs()