#!/usr/bin/env python3

from PIL import Image, ImageDraw, ImageFont
import os

def create_mobile_comparison():
    # Load the current mobile screenshot and modern homepage
    try:
        current_img = Image.open('wallgroup-current-mobile.png')
        modern_img = Image.open('wallgroup-modern-homepage.png')
    except FileNotFoundError as e:
        print(f"Error: Could not find image file - {e}")
        return False
    
    # Resize both to same height for comparison
    target_height = min(current_img.height, modern_img.height, 1000)
    
    # Calculate widths maintaining aspect ratio
    current_width = int((target_height / current_img.height) * current_img.width)
    modern_width = int((target_height / modern_img.height) * modern_img.width)
    
    # Resize images
    current_resized = current_img.resize((current_width, target_height), Image.Resampling.LANCZOS)
    modern_resized = modern_img.resize((modern_width, target_height), Image.Resampling.LANCZOS)
    
    # Create comparison canvas
    padding = 40
    header_height = 120
    comparison_width = current_width + modern_width + (padding * 3)
    comparison_height = target_height + header_height + (padding * 2)
    
    # Create white background
    comparison = Image.new('RGB', (comparison_width, comparison_height), 'white')
    draw = ImageDraw.Draw(comparison)
    
    # Draw header background
    draw.rectangle([0, 0, comparison_width, header_height], fill='#E31E24')
    
    # Add title text (using default font since we may not have custom fonts)
    try:
        title_font = ImageFont.truetype('Arial.ttf', 36)
        subtitle_font = ImageFont.truetype('Arial.ttf', 18)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Calculate text positions
    title_text = "Wall Group: BEFORE vs AFTER"
    title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
    title_x = (comparison_width - (title_bbox[2] - title_bbox[0])) // 2
    
    subtitle_text = "From embarrassing BaseKit template to modern mobile-first design"
    subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=subtitle_font)
    subtitle_x = (comparison_width - (subtitle_bbox[2] - subtitle_bbox[0])) // 2
    
    # Draw text
    draw.text((title_x, 25), title_text, fill='white', font=title_font)
    draw.text((subtitle_x, 70), subtitle_text, fill='white', font=subtitle_font)
    
    # Add "BEFORE" and "AFTER" labels
    before_x = padding + (current_width // 2) - 50
    after_x = padding * 2 + current_width + (modern_width // 2) - 40
    
    # Draw label backgrounds
    draw.rectangle([before_x - 60, header_height - 30, before_x + 60, header_height + 10], fill='#dc3545')
    draw.rectangle([after_x - 60, header_height - 30, after_x + 60, header_height + 10], fill='#28a745')
    
    # Draw labels
    draw.text((before_x - 35, header_height - 20), "BEFORE", fill='white', font=subtitle_font)
    draw.text((after_x - 30, header_height - 20), "AFTER", fill='white', font=subtitle_font)
    
    # Paste the screenshots
    current_y = header_height + padding
    comparison.paste(current_resized, (padding, current_y))
    comparison.paste(modern_resized, (padding * 2 + current_width, current_y))
    
    # Add subtle borders around screenshots
    draw.rectangle([padding - 2, current_y - 2, padding + current_width + 1, current_y + target_height + 1], outline='#ddd', width=2)
    draw.rectangle([padding * 2 + current_width - 2, current_y - 2, padding * 2 + current_width + modern_width + 1, current_y + target_height + 1], outline='#ddd', width=2)
    
    # Save comparison
    comparison.save('wallgroup-mobile-comparison.png', 'PNG', quality=95)
    print("✅ Mobile comparison created: wallgroup-mobile-comparison.png")
    return True

if __name__ == "__main__":
    success = create_mobile_comparison()
    if not success:
        print("❌ Failed to create mobile comparison")
        exit(1)