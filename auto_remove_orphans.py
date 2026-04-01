#!/usr/bin/env python3
"""
Automatically find and remove all orphaned FAQ blocks
"""

def auto_remove_orphans():
    iteration = 1
    while True:
        # Try to build and see if there are more errors
        import subprocess
        result = subprocess.run(['npm', 'run', 'build'], 
                              cwd='.', 
                              capture_output=True, 
                              text=True)
        
        if result.returncode == 0:
            print("Build successful! No more orphaned content.")
            break
            
        # Parse the error to find the line number
        error_output = result.stderr
        if "Expected ',', got ':'" in error_output:
            # Extract line number where orphaned faqs: [ starts
            lines = error_output.split('\n')
            for line in lines:
                if 'faqs: [' in line and '|' in line:
                    # Extract line number
                    parts = line.split('|')
                    if len(parts) >= 2:
                        line_num_str = parts[0].strip()
                        if line_num_str.isdigit():
                            orphan_start = int(line_num_str)
                            print(f"Iteration {iteration}: Found orphaned faqs at line {orphan_start}")
                            
                            # Find where this orphaned block ends
                            with open('src/data/guides.ts', 'r') as f:
                                file_lines = f.readlines()
                            
                            # Find the end of this orphaned block
                            orphan_end = None
                            for i in range(orphan_start, min(len(file_lines), orphan_start + 20)):
                                if file_lines[i-1].strip() == '},':  # -1 because line numbers are 1-indexed
                                    # Check if the next line starts a valid guide
                                    if i < len(file_lines) and file_lines[i].strip() == '{':
                                        next_few_lines = ''.join(file_lines[i:i+5])
                                        if 'slug:' in next_few_lines:
                                            orphan_end = i - 1  # End at the }, line
                                            break
                            
                            if orphan_end:
                                print(f"Removing orphaned content from line {orphan_start} to {orphan_end}")
                                # Remove the orphaned lines using sed
                                subprocess.run(['sed', f'{orphan_start},{orphan_end}d', 
                                              'src/data/guides.ts'], 
                                             stdout=open('temp_clean.ts', 'w'))
                                subprocess.run(['mv', 'temp_clean.ts', 'src/data/guides.ts'])
                                iteration += 1
                                break
                            else:
                                print("Could not find end of orphaned block")
                                return
                            break
                    break
        else:
            print("Different error type:", error_output)
            break

if __name__ == '__main__':
    auto_remove_orphans()