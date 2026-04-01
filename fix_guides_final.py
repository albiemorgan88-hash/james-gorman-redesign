#!/usr/bin/env python3
"""
Final attempt to fix guides.ts by manually identifying and removing orphaned FAQ blocks.
"""
import re

def fix_guides_final():
    with open('src/data/guides.ts', 'r') as f:
        lines = f.readlines()
    
    # Known problem areas based on our analysis:
    # Line 733-765: Orphaned FAQs after landscape gardener
    # Let's remove these specific ranges
    
    ranges_to_remove = [
        (732, 765),  # First batch of orphaned FAQs (0-indexed, so 733-766 in 1-indexed)
    ]
    
    # Create a set of line indices to remove
    lines_to_remove = set()
    for start, end in ranges_to_remove:
        for i in range(start, end):
            lines_to_remove.add(i)
    
    # Keep only lines not in the removal set
    filtered_lines = []
    for i, line in enumerate(lines):
        if i not in lines_to_remove:
            filtered_lines.append(line)
    
    # After removing the first batch, we need to find the next orphaned section
    # Write this first fix and test it
    with open('src/data/guides.ts', 'w') as f:
        f.writelines(filtered_lines)
    
    print("Removed first batch of orphaned FAQs (lines 733-765)")

if __name__ == '__main__':
    fix_guides_final()