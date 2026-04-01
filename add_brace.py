#!/usr/bin/env python3
with open('src/data/guides.ts', 'r') as f:
    lines = f.readlines()

# Add opening brace before line 733 (0-indexed 732)
lines.insert(732, '  {\n')

with open('src/data/guides.ts', 'w') as f:
    f.writelines(lines)

print("Added opening brace")