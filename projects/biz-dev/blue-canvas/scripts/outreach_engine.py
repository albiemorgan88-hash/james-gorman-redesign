#!/usr/bin/env python3
"""
Blue Canvas Outreach Engine
Automated email and LinkedIn outreach with tracking
"""

import os
import json
import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import time

from lead_generator import Lead
from templates.email_templates import EmailTemplates, LinkedInTemplates

@dataclass
class OutreachRecord:
    lead_company: str
    lead_email: str
    outreach_type: str  # email, linkedin
    sequence_step: int
    sent_at: str
    subject: str = ""
    status: str = "sent"  # sent, opened, replied, bounced
    response_received: str = ""
    next_follow_up: str = ""
    
class OutreachEngine:
    def __init__(self):
        self.data_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/data"
        self.outreach_log = f"{self.data_dir}/outreach_log.json"
        os.makedirs(self.data_dir, exist_ok=True)
        
        # Email setup (using Gmail SMTP - requires app password)
        self.smtp_server = "smtp.gmail.com"
        self.smtp_port = 587
        self.email_user = os.getenv('GMAIL_USER', 'phil@bluecanvas.ai')
        self.email_password = os.getenv('GMAIL_APP_PASSWORD')  # Gmail app password
        
    def load_outreach_log(self) -> List[OutreachRecord]:
        """Load existing outreach log"""
        if os.path.exists(self.outreach_log):
            with open(self.outreach_log, 'r') as f:
                data = json.load(f)
                return [OutreachRecord(**record) for record in data]
        return []
    
    def save_outreach_log(self, records: List[OutreachRecord]):
        """Save outreach log"""
        with open(self.outreach_log, 'w') as f:
            json.dump([asdict(record) for record in records], f, indent=2)
    
    def has_been_contacted(self, lead: Lead, outreach_type: str) -> bool:
        """Check if lead has already been contacted via this channel"""
        log = self.load_outreach_log()
        return any(
            record.lead_email == lead.email and 
            record.outreach_type == outreach_type 
            for record in log
        )
    
    def send_email(self, lead: Lead, template, dry_run: bool = True) -> bool:
        """Send email to lead"""
        
        if not lead.email:
            print(f"⚠️  No email for {lead.company_name}, skipping")
            return False
            
        if self.has_been_contacted(lead, "email"):
            print(f"📧 Already contacted {lead.company_name} via email, skipping")
            return False
            
        try:
            if dry_run:
                print(f"🔥 DRY RUN - Would send email to {lead.company_name}")
                print(f"   To: {lead.email}")
                print(f"   Subject: {template.subject}")
                print(f"   Preview: {template.body[:100]}...")
                return True
            
            if not self.email_password:
                print("⚠️  Gmail app password not set. Set GMAIL_APP_PASSWORD env var for actual sending.")
                return False
            
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.email_user
            msg['To'] = lead.email
            msg['Subject'] = template.subject
            
            # Add body
            msg.attach(MIMEText(template.body, 'plain'))
            
            # Send email
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.email_user, self.email_password)
            text = msg.as_string()
            server.sendmail(self.email_user, lead.email, text)
            server.quit()
            
            print(f"✅ Email sent to {lead.company_name} ({lead.email})")
            return True
            
        except Exception as e:
            print(f"❌ Failed to send email to {lead.company_name}: {e}")
            return False
    
    def log_outreach(self, lead: Lead, outreach_type: str, sequence_step: int, subject: str = "", success: bool = True):
        """Log outreach attempt"""
        log = self.load_outreach_log()
        
        # Calculate next follow-up date (3-4 days for email, 5-7 for LinkedIn)
        days_ahead = 4 if outreach_type == "email" else 6
        next_follow_up = (datetime.now() + timedelta(days=days_ahead)).isoformat()
        
        record = OutreachRecord(
            lead_company=lead.company_name,
            lead_email=lead.email,
            outreach_type=outreach_type,
            sequence_step=sequence_step,
            sent_at=datetime.now().isoformat(),
            subject=subject,
            status="sent" if success else "failed",
            next_follow_up=next_follow_up
        )
        
        log.append(record)
        self.save_outreach_log(log)
    
    def execute_email_outreach(self, leads: List[Lead], sequence_step: int = 1, daily_limit: int = 25, dry_run: bool = True):
        """Execute email outreach to a batch of leads"""
        
        print(f"📧 Starting email outreach (step {sequence_step})")
        print(f"🎯 Daily limit: {daily_limit} emails")
        print(f"🔥 Dry run mode: {dry_run}")
        print()
        
        sent_count = 0
        
        # Filter leads by score (prioritize high-value prospects)
        high_value_leads = [l for l in leads if l.digital_maturity_score >= 7]
        other_leads = [l for l in leads if l.digital_maturity_score < 7]
        
        # Process high-value first
        all_leads = high_value_leads + other_leads
        
        for lead in all_leads:
            if sent_count >= daily_limit:
                print(f"📈 Reached daily limit of {daily_limit} emails")
                break
                
            if not lead.email:
                continue
                
            if self.has_been_contacted(lead, "email"):
                continue
            
            # Get and personalize template
            template = EmailTemplates.get_template(lead.industry, sequence_step)
            personalized_template = EmailTemplates.personalize_template(template, lead)
            
            # Send email
            success = self.send_email(lead, personalized_template, dry_run)
            
            if success:
                self.log_outreach(lead, "email", sequence_step, personalized_template.subject, success)
                sent_count += 1
                print(f"   📊 Progress: {sent_count}/{daily_limit}")
                
                # Rate limiting
                time.sleep(2)
        
        print(f"\n📈 Email outreach complete: {sent_count} emails sent")
        return sent_count
    
    def generate_linkedin_outreach_list(self, leads: List[Lead], limit: int = 20) -> List[Dict]:
        """Generate LinkedIn outreach list with templates"""
        
        linkedin_prospects = []
        
        for lead in leads:
            if not lead.decision_maker_linkedin:
                continue
                
            if self.has_been_contacted(lead, "linkedin"):
                continue
            
            # Generate connection request
            connection_request = LinkedInTemplates.get_connection_request(lead)
            follow_up_message = LinkedInTemplates.get_follow_up_message(lead)
            
            prospect = {
                'company': lead.company_name,
                'decision_maker': lead.decision_maker,
                'linkedin_url': lead.decision_maker_linkedin,
                'connection_request': connection_request,
                'follow_up_message': follow_up_message,
                'industry': lead.industry,
                'location': lead.location,
                'digital_score': lead.digital_maturity_score,
                'pain_points': '; '.join(lead.pain_points)
            }
            
            linkedin_prospects.append(prospect)
            
            if len(linkedin_prospects) >= limit:
                break
        
        return linkedin_prospects
    
    def get_follow_up_candidates(self, days_since_last: int = 4) -> List[Dict]:
        """Get leads ready for follow-up"""
        
        log = self.load_outreach_log()
        cutoff_date = datetime.now() - timedelta(days=days_since_last)
        
        follow_ups = []
        
        for record in log:
            if record.status != "replied":  # Don't follow up if they replied
                sent_date = datetime.fromisoformat(record.sent_at)
                
                if sent_date <= cutoff_date and record.sequence_step < 3:  # Max 3 touches
                    follow_ups.append({
                        'company': record.lead_company,
                        'email': record.lead_email,
                        'last_contact': record.sent_at,
                        'next_sequence_step': record.sequence_step + 1,
                        'outreach_type': record.outreach_type
                    })
        
        return follow_ups

def main():
    """Test the outreach engine"""
    
    # Load latest enriched leads
    import glob
    
    engine = OutreachEngine()
    data_dir = engine.data_dir
    
    # Find most recent enriched leads file
    enriched_files = glob.glob(f"{data_dir}/enriched_leads_*.json")
    if not enriched_files:
        print("❌ No enriched leads files found. Run contact_enricher.py first.")
        return
    
    latest_file = max(enriched_files, key=os.path.getctime)
    print(f"📂 Loading leads from {latest_file}")
    
    # Load leads
    with open(latest_file, 'r') as f:
        lead_data = json.load(f)
    
    leads = []
    for data in lead_data:
        lead = Lead(**data)
        leads.append(lead)
    
    print(f"📊 Loaded {len(leads)} enriched leads")
    
    # Filter to top prospects (score 6+)
    top_prospects = [l for l in leads if l.digital_maturity_score >= 6 and l.email]
    print(f"🎯 {len(top_prospects)} qualified prospects with email addresses")
    
    # Execute email outreach (DRY RUN)
    sent_count = engine.execute_email_outreach(top_prospects, sequence_step=1, daily_limit=10, dry_run=True)
    
    print(f"\n📧 Would have sent {sent_count} emails")
    
    # Generate LinkedIn list
    linkedin_list = engine.generate_linkedin_outreach_list(top_prospects, limit=15)
    
    print(f"\n💼 Generated {len(linkedin_list)} LinkedIn prospects")
    
    # Save LinkedIn list for manual outreach
    linkedin_file = f"{data_dir}/linkedin_outreach_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    with open(linkedin_file, 'w', newline='', encoding='utf-8') as csvfile:
        if linkedin_list:
            writer = csv.DictWriter(csvfile, fieldnames=linkedin_list[0].keys())
            writer.writeheader()
            writer.writerows(linkedin_list)
    
    print(f"💾 Saved LinkedIn prospects to {linkedin_file}")
    
    # Check for follow-ups
    follow_ups = engine.get_follow_up_candidates(4)
    print(f"\n🔄 {len(follow_ups)} leads ready for follow-up")

if __name__ == "__main__":
    main()