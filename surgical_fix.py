#!/usr/bin/env python3
"""
Surgical fix - remove only the known corrupted sections
"""

def surgical_fix():
    with open('src/data/guides.ts', 'r') as f:
        lines = f.readlines()
    
    # I need to identify the exact ranges of corruption
    # From my analysis:
    # - Line 732: end of landscape gardener guide with }  
    # - Line 733: start of orphaned faqs: [
    # - Line 765: should be start of heat pump guide
    
    # But first, let me find the actual end of landscape gardener guide
    landscape_end = None
    for i, line in enumerate(lines):
        if 'how-to-become-a-landscape-gardener' in line:
            # Found the start, now find the end
            brace_count = 0
            started = False
            for j in range(i, len(lines)):
                if lines[j].strip() == '{':
                    brace_count = 1
                    started = True
                elif started:
                    brace_count += lines[j].count('{') - lines[j].count('}')
                    if brace_count == 0:
                        landscape_end = j
                        print(f"Landscape gardener guide ends at line {j+1}: {lines[j].strip()}")
                        break
            break
    
    # Find the start of heat pump guide
    heat_pump_start = None
    for i, line in enumerate(lines):
        if 'how-to-become-a-heat-pump-installer' in line:
            # Look backward for the opening brace
            for j in range(i-5, i):
                if j >= 0 and lines[j].strip() == '{':
                    heat_pump_start = j
                    print(f"Heat pump guide starts at line {j+1}: {lines[j].strip()}")
                    break
            break
    
    if landscape_end and heat_pump_start:
        print(f"Removing orphaned content from line {landscape_end+2} to {heat_pump_start}")
        # Remove the orphaned content between these guides
        new_lines = lines[:landscape_end+1] + lines[heat_pump_start:]
        
        with open('src/data/guides.ts', 'w') as f:
            f.writelines(new_lines)
        
        print("Successfully removed first orphaned section")
    else:
        print("Could not identify the corruption boundaries")

if __name__ == '__main__':
    surgical_fix()