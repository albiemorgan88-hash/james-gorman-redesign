#!/usr/bin/env python3
"""
Apollo Sequence Setup Reference
"Solicitors Derry - Blue Canvas"

This script provides the exact configuration details needed
to manually set up the Apollo sequence in the web interface.
"""

import json

# Email template configuration
EMAIL_CONFIG = {
    "sequence_name": "Solicitors Derry - Blue Canvas",
    "subject_line": "Quick AI audit for {{organization.name}} - 15 minutes, zero cost",
    "email_body": """Hi {{first_name}},

I work with legal practices across Northern Ireland helping them cut 10+ hours per week of administrative work using AI automation.

Specifically, we help solicitors streamline:
• Client intake and enquiry management (24/7 response)
• Document review and processing 
• Case management and follow-up workflows
• Client communication efficiency

Would a complimentary 15-minute AI audit be valuable? We'll map your current processes and show exactly where automation saves time and improves client service.

No cost, no obligation - just practical insights tailored to your practice.

You can see a quick overview here: audit.bluecanvas.ai/?email={{email}}

Best regards,
Phil Patterson
Blue Canvas AI Consultancy""",
    
    "follow_up_2": {
        "subject": "Re: Quick AI audit for {{organization.name}}",
        "body": """Hi {{first_name}},

Following up on my previous message about AI automation for legal practices.

We recently helped a solicitors firm in Belfast reduce their client intake processing time by 75% using AI - from initial enquiry to case file setup.

If a brief conversation about your current workflows would be helpful, I'm here. Otherwise, no worries at all.

Best,
Phil""",
        "delay_days": 3
    },
    
    "follow_up_3": {
        "subject": "Final note - {{organization.name}}",
        "body": """Hi {{first_name}},

I'll keep this brief - if streamlining your practice's admin processes isn't a priority right now, no problem at all.

If it becomes relevant in future, just reply to this email anytime.

Thanks for your time.

Phil Patterson
Blue Canvas AI""",
        "delay_days": 7
    }
}

# Sequence settings
SEQUENCE_SETTINGS = {
    "send_days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "send_window": "9:00 AM - 4:00 PM UK time",
    "time_zone": "Europe/London",
    "max_emails_per_day": 10,
    "delay_between_emails": "2-5 minutes"
}

def print_apollo_config():
    """Print the configuration for easy copy-paste into Apollo"""
    print("=" * 60)
    print("APOLLO SEQUENCE CONFIGURATION")
    print("=" * 60)
    
    print(f"\nSEQUENCE NAME: {EMAIL_CONFIG['sequence_name']}")
    print(f"\nSUBJECT LINE:\n{EMAIL_CONFIG['subject_line']}")
    print(f"\nEMAIL BODY:\n{EMAIL_CONFIG['email_body']}")
    
    print(f"\n{'='*40}")
    print("FOLLOW-UP EMAIL 2 (Day 3)")
    print(f"{'='*40}")
    print(f"Subject: {EMAIL_CONFIG['follow_up_2']['subject']}")
    print(f"Body:\n{EMAIL_CONFIG['follow_up_2']['body']}")
    
    print(f"\n{'='*40}")
    print("FOLLOW-UP EMAIL 3 (Day 7)")
    print(f"{'='*40}")
    print(f"Subject: {EMAIL_CONFIG['follow_up_3']['subject']}")
    print(f"Body:\n{EMAIL_CONFIG['follow_up_3']['body']}")
    
    print(f"\n{'='*40}")
    print("SEQUENCE SETTINGS")
    print(f"{'='*40}")
    for key, value in SEQUENCE_SETTINGS.items():
        print(f"{key}: {value}")
    
    print(f"\n{'='*40}")
    print("APOLLO VARIABLES TO USE")
    print(f"{'='*40}")
    print("• {{first_name}} - Contact's first name")
    print("• {{organization.name}} - Company name")  
    print("• {{email}} - Contact's email (for tracking URL)")
    
    print(f"\n{'='*40}")
    print("TRACKING URL")
    print(f"{'='*40}")
    print("audit.bluecanvas.ai/?email={{email}}")
    
    print("\n✅ Configuration ready for Apollo setup!")

if __name__ == "__main__":
    print_apollo_config()