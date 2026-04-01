#!/usr/bin/env python3
with open('src/data/guides.ts', 'r') as f:
    lines = f.readlines()

# Add opening brace and missing fields before line 733
lines.insert(732, '  {\n')
lines.insert(733, '    slug: \'missing-guide\',\n')
lines.insert(734, '    title: \'Missing Guide\',\n') 
lines.insert(735, '    trade: \'Unknown\',\n')

with open('src/data/guides.ts', 'w') as f:
    f.writelines(lines)

print("Added opening brace and missing fields")