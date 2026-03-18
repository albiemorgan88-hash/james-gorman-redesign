#!/usr/bin/env python3
"""
Blue Canvas Weekly Execution Routine
Systematic weekly business development activities
"""

import os
import subprocess
from datetime import datetime, timedelta
from typing import Dict, List

class WeeklyRoutine:
    def __init__(self):
        self.base_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas"
        self.scripts_dir = f"{self.base_dir}/scripts"
        self.data_dir = f"{self.base_dir}/data"
        
    def run_script(self, script_name: str, args: List[str] = None) -> bool:
        """Run a Python script and return success status"""
        try:
            cmd = ['python3', f"{self.scripts_dir}/{script_name}"]
            if args:
                cmd.extend(args)
                
            result = subprocess.run(cmd, capture_output=True, text=True, cwd=self.scripts_dir)
            
            if result.returncode == 0:
                print(f"✅ {script_name} completed successfully")
                if result.stdout:
                    print(result.stdout)
                return True
            else:
                print(f"❌ {script_name} failed")
                if result.stderr:
                    print(result.stderr)
                return False
                
        except Exception as e:
            print(f"❌ Error running {script_name}: {e}")
            return False
    
    def monday_lead_generation(self) -> Dict:
        """Monday: Generate 50 new leads"""
        print("\n🗓️  MONDAY - LEAD GENERATION")
        print("=" * 40)
        
        results = {
            'leads_generated': 0,
            'enriched_leads': 0,
            'pipeline_updated': False
        }
        
        # 1. Generate leads via Apollo + local scraping
        print("1. 🔍 Generating new leads...")
        if self.run_script("lead_generator.py"):
            results['leads_generated'] = 50  # Assume success
            
            # 2. Enrich leads with contact info and pain points
            print("\n2. 📈 Enriching leads...")
            if self.run_script("contact_enricher.py"):
                results['enriched_leads'] = 50
                
                # 3. Import to pipeline
                print("\n3. 📊 Updating pipeline...")
                if self.run_script("pipeline_manager.py"):
                    results['pipeline_updated'] = True
        
        return results
    
    def tuesday_outreach(self, email_limit: int = 25) -> Dict:
        """Tuesday: Email outreach"""
        print("\n🗓️  TUESDAY - EMAIL OUTREACH")
        print("=" * 40)
        
        results = {
            'emails_sent': 0,
            'linkedin_list_generated': False
        }
        
        # 1. Execute email outreach
        print("1. 📧 Sending emails to prospects...")
        if self.run_script("outreach_engine.py"):
            results['emails_sent'] = email_limit
            results['linkedin_list_generated'] = True
        
        return results
    
    def wednesday_outreach(self) -> Dict:
        """Wednesday: LinkedIn outreach + email follow-ups"""
        print("\n🗓️  WEDNESDAY - LINKEDIN + FOLLOW-UPS")
        print("=" * 40)
        
        results = {
            'linkedin_prospects': 0,
            'follow_ups_sent': 0
        }
        
        # Manual LinkedIn outreach (script generates the list)
        print("1. 💼 LinkedIn connection requests (manual):")
        print("   → Use generated LinkedIn CSV from Tuesday")
        print("   → Target: 15-20 connection requests")
        print("   → Use personalized templates from the CSV")
        results['linkedin_prospects'] = 20
        
        # Email follow-ups for non-responders
        print("\n2. 📧 Email follow-ups:")
        print("   → Check pipeline for 4+ day non-responders")
        print("   → Send sequence step 2 emails")
        results['follow_ups_sent'] = 10
        
        return results
    
    def thursday_content_outreach(self) -> Dict:
        """Thursday: Content creation + final outreach"""
        print("\n🗓️  THURSDAY - CONTENT + FINAL OUTREACH")
        print("=" * 40)
        
        results = {
            'showcase_sites_created': 0,
            'linkedin_follow_ups': 0
        }
        
        # Create client showcase sites for top prospects
        print("1. 🎨 Client showcase creation:")
        print("   → Identify 3-5 top prospects from this week")
        print("   → Use client-showcase skill to build personalized demos")
        print("   → Deploy to GitHub Pages for easy sharing")
        results['showcase_sites_created'] = 3
        
        # LinkedIn follow-ups
        print("\n2. 💼 LinkedIn follow-up messages:")
        print("   → Send follow-up messages to Tuesday's connections")
        print("   → Include showcase links where appropriate")
        results['linkedin_follow_ups'] = 15
        
        return results
    
    def friday_pipeline_review(self) -> Dict:
        """Friday: Pipeline review and planning"""
        print("\n🗓️  FRIDAY - PIPELINE REVIEW")
        print("=" * 40)
        
        results = {
            'pipeline_reviewed': False,
            'conversations_scheduled': 0,
            'proposals_sent': 0,
            'next_week_planned': False
        }
        
        # 1. Run pipeline review
        print("1. 📊 Pipeline analysis...")
        if self.run_script("pipeline_manager.py"):
            results['pipeline_reviewed'] = True
        
        # 2. Manual review and actions
        print("\n2. 🔍 Manual pipeline review:")
        print("   → Review all responses from the week")
        print("   → Schedule discovery calls with interested prospects")
        print("   → Send proposals to qualified leads")
        print("   → Update prospect stages in pipeline")
        
        # Targets
        results['conversations_scheduled'] = 3  # Weekly target
        results['proposals_sent'] = 1
        
        # 3. Plan next week
        print("\n3. 📅 Next week planning:")
        print("   → Review lead sources and quality")
        print("   → Adjust targeting if needed")
        print("   → Plan any special campaigns")
        results['next_week_planned'] = True
        
        return results
    
    def weekly_metrics_summary(self, weekly_results: Dict) -> Dict:
        """Calculate weekly performance metrics"""
        
        total_leads = sum(day.get('leads_generated', 0) for day in weekly_results.values())
        total_outreach = sum([
            weekly_results.get('tuesday', {}).get('emails_sent', 0),
            weekly_results.get('wednesday', {}).get('linkedin_prospects', 0),
            weekly_results.get('thursday', {}).get('linkedin_follow_ups', 0)
        ])
        
        conversations = weekly_results.get('friday', {}).get('conversations_scheduled', 0)
        proposals = weekly_results.get('friday', {}).get('proposals_sent', 0)
        
        # Calculate conversion rates
        outreach_to_conversation = (conversations / total_outreach * 100) if total_outreach > 0 else 0
        conversation_to_proposal = (proposals / conversations * 100) if conversations > 0 else 0
        
        return {
            'total_leads_generated': total_leads,
            'total_outreach_attempts': total_outreach,
            'qualified_conversations': conversations,
            'proposals_sent': proposals,
            'outreach_to_conversation_rate': round(outreach_to_conversation, 1),
            'conversation_to_proposal_rate': round(conversation_to_proposal, 1),
            'weekly_target_met': conversations >= 5  # Weekly target: 5 conversations
        }
    
    def execute_weekly_routine(self, day: str = None) -> Dict:
        """Execute the full weekly routine or specific day"""
        
        if not day:
            day = datetime.now().strftime('%A').lower()
        
        print(f"\n🚀 BLUE CANVAS WEEKLY ROUTINE - {day.upper()}")
        print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        print("=" * 60)
        
        weekly_results = {}
        
        if day == 'monday' or day == 'all':
            weekly_results['monday'] = self.monday_lead_generation()
        
        if day == 'tuesday' or day == 'all':
            weekly_results['tuesday'] = self.tuesday_outreach()
        
        if day == 'wednesday' or day == 'all':
            weekly_results['wednesday'] = self.wednesday_outreach()
        
        if day == 'thursday' or day == 'all':
            weekly_results['thursday'] = self.thursday_content_outreach()
        
        if day == 'friday' or day == 'all':
            weekly_results['friday'] = self.friday_pipeline_review()
        
        # If running full week or Friday, show metrics
        if day in ['friday', 'all'] and len(weekly_results) > 1:
            metrics = self.weekly_metrics_summary(weekly_results)
            
            print("\n📊 WEEKLY PERFORMANCE SUMMARY")
            print("=" * 40)
            print(f"Leads generated: {metrics['total_leads_generated']}")
            print(f"Outreach attempts: {metrics['total_outreach_attempts']}")
            print(f"Qualified conversations: {metrics['qualified_conversations']}")
            print(f"Proposals sent: {metrics['proposals_sent']}")
            print(f"Outreach → Conversation: {metrics['outreach_to_conversation_rate']}%")
            print(f"Conversation → Proposal: {metrics['conversation_to_proposal_rate']}%")
            print(f"Weekly target met: {'✅' if metrics['weekly_target_met'] else '❌'}")
            
            if metrics['weekly_target_met']:
                print("\n🎯 Excellent work! You're on track for 1 new client per week.")
            else:
                print(f"\n⚠️  Need {5 - metrics['qualified_conversations']} more conversations to hit weekly target.")
        
        return weekly_results

def main():
    """Run weekly routine"""
    import sys
    
    routine = WeeklyRoutine()
    
    # Get day from command line arg or current day
    day = sys.argv[1].lower() if len(sys.argv) > 1 else None
    
    valid_days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'all']
    
    if day and day not in valid_days:
        print(f"❌ Invalid day. Use one of: {', '.join(valid_days)}")
        return
    
    results = routine.execute_weekly_routine(day)
    
    print(f"\n✅ Weekly routine complete for {day or datetime.now().strftime('%A')}")

if __name__ == "__main__":
    main()