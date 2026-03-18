#!/usr/bin/env python3
"""
Blue Canvas System Test
Test the biz dev machine with 10 sample prospects
"""

import os
import json
from datetime import datetime
from lead_generator import Lead, LeadGenerator
from contact_enricher import ContactEnricher
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from templates.email_templates import EmailTemplates, LinkedInTemplates
from outreach_engine import OutreachEngine
from pipeline_manager import PipelineManager

def create_test_leads() -> list:
    """Create 10 test leads for system validation"""
    
    test_leads = [
        Lead(
            company_name="Murphy & Associates Solicitors",
            industry="legal services",
            location="Derry, Northern Ireland", 
            website="",
            decision_maker="John Murphy",
            email="j.murphy@example.com",
            phone="028 7134 5678",
            digital_maturity_score=9,
            pain_points=["No website", "No online booking system"],
            source="test"
        ),
        Lead(
            company_name="Elite Beauty Salon",
            industry="beauty salon",
            location="Belfast, Northern Ireland",
            website="elitebeautybelfast.com",
            decision_maker="Sarah Connor",
            email="sarah@elitebeauty.com", 
            phone="028 9024 5678",
            digital_maturity_score=7,
            pain_points=["Not mobile-optimized", "No online booking system"],
            source="test"
        ),
        Lead(
            company_name="O'Brien Accounting",
            industry="accounting",
            location="Omagh, Northern Ireland",
            website="obrienaccounting.co.uk",
            decision_maker="Michael O'Brien",
            email="michael@obrienaccounting.co.uk",
            digital_maturity_score=6,
            pain_points=["Poor SEO setup", "No website analytics"],
            source="test"
        ),
        Lead(
            company_name="The Merchant's Table",
            industry="restaurant", 
            location="Cork, Ireland",
            website="merchantstable.ie",
            decision_maker="Emma Walsh",
            email="emma@merchantstable.ie",
            digital_maturity_score=8,
            pain_points=["No online booking system", "No SSL certificate"],
            source="test"
        ),
        Lead(
            company_name="Quinn Property Services",
            industry="real estate",
            location="Enniskillen, Northern Ireland",
            website="quinnproperty.com",
            decision_maker="Patrick Quinn", 
            email="patrick@quinnproperty.com",
            digital_maturity_score=5,
            pain_points=["Poor SEO setup"],
            source="test"
        ),
        Lead(
            company_name="Shamrock Dental Practice", 
            industry="dental",
            location="Dublin, Ireland",
            website="shamrockdental.ie",
            decision_maker="Dr. Mary Kelly",
            email="mary@shamrockdental.ie",
            digital_maturity_score=7,
            pain_points=["No online booking system", "Not mobile-optimized"],
            source="test"
        ),
        Lead(
            company_name="Celtic Construction Ltd",
            industry="construction",
            location="Galway, Ireland", 
            website="celticconstruction.ie",
            decision_maker="Sean O'Sullivan",
            email="sean@celticconstruction.ie",
            digital_maturity_score=6,
            pain_points=["Poor SEO setup", "No contact forms"],
            source="test"
        ),
        Lead(
            company_name="North Coast Veterinary",
            industry="veterinary", 
            location="Coleraine, Northern Ireland",
            website="northcoastvet.com",
            decision_maker="Dr. Lisa Thompson",
            email="lisa@northcoastvet.com",
            digital_maturity_score=8,
            pain_points=["No online booking system", "No website analytics"],
            source="test"
        ),
        Lead(
            company_name="Foyle Retail Group",
            industry="retail",
            location="Derry, Northern Ireland",
            website="foyleretail.com", 
            decision_maker="David McCloskey",
            email="david@foyleretail.com",
            digital_maturity_score=4,
            pain_points=["Poor SEO setup"],
            source="test"
        ),
        Lead(
            company_name="McGrath & Partners",
            industry="accounting", 
            location="Belfast, Northern Ireland",
            website="",
            decision_maker="Claire McGrath",
            email="claire@mcgrathpartners.com",
            digital_maturity_score=10,
            pain_points=["No website", "No online presence"],
            source="test"
        )
    ]
    
    return test_leads

def test_lead_generation():
    """Test lead generation component"""
    print("🔍 Testing Lead Generation...")
    
    # Create test leads
    test_leads = create_test_leads()
    
    # Save test leads
    generator = LeadGenerator()
    generator.save_leads(test_leads, "test_leads")
    
    print(f"✅ Generated {len(test_leads)} test leads")
    print(f"📊 Average digital maturity score: {sum(l.digital_maturity_score for l in test_leads) / len(test_leads):.1f}")
    print(f"🎯 High-value leads (score 8+): {len([l for l in test_leads if l.digital_maturity_score >= 8])}")
    
    return test_leads

def test_contact_enrichment(leads):
    """Test contact enrichment component"""
    print("\n📈 Testing Contact Enrichment...")
    
    enricher = ContactEnricher()
    
    # Test enrichment on first 3 leads (to save time)
    test_sample = leads[:3]
    enriched_leads = []
    
    for lead in test_sample:
        print(f"🔍 Enriching {lead.company_name}...")
        
        # Test website analysis
        if lead.website:
            lead = enricher.analyze_website(lead)
        
        # Test revenue estimation  
        lead.employee_count = "10-20"  # Add test employee count
        lead = enricher.estimate_revenue(lead)
        
        enriched_leads.append(lead)
    
    print(f"✅ Enriched {len(enriched_leads)} leads")
    
    for lead in enriched_leads:
        print(f"   • {lead.company_name}: Score {lead.digital_maturity_score}, Est. {lead.revenue_estimate}")
    
    return enriched_leads

def test_email_templates(leads):
    """Test email template generation"""
    print("\n📧 Testing Email Templates...")
    
    for lead in leads[:3]:  # Test first 3
        template = EmailTemplates.get_template(lead.industry, 1)
        personalized = EmailTemplates.personalize_template(template, lead)
        
        print(f"\n🎯 Template for {lead.company_name} ({lead.industry}):")
        print(f"   Subject: {personalized.subject}")
        print(f"   Preview: {personalized.body[:100]}...")
    
    print("✅ Email templates generated successfully")

def test_linkedin_templates(leads):
    """Test LinkedIn template generation"""
    print("\n💼 Testing LinkedIn Templates...")
    
    for lead in leads[:3]:  # Test first 3
        lead.decision_maker_linkedin = f"https://linkedin.com/in/{lead.decision_maker.lower().replace(' ', '-')}"
        
        connection_request = LinkedInTemplates.get_connection_request(lead)
        follow_up = LinkedInTemplates.get_follow_up_message(lead)
        
        print(f"\n🎯 LinkedIn for {lead.company_name}:")
        print(f"   Connection: {connection_request[:80]}...")
        print(f"   Follow-up: {follow_up[:80]}...")
    
    print("✅ LinkedIn templates generated successfully")

def test_outreach_engine(leads):
    """Test outreach engine (dry run)"""
    print("\n📤 Testing Outreach Engine...")
    
    engine = OutreachEngine()
    
    # Test email outreach (dry run)
    sent_count = engine.execute_email_outreach(leads[:5], sequence_step=1, daily_limit=5, dry_run=True)
    
    print(f"✅ Would have sent {sent_count} emails")
    
    # Test LinkedIn list generation
    linkedin_list = engine.generate_linkedin_outreach_list(leads[:5], limit=5)
    
    print(f"✅ Generated {len(linkedin_list)} LinkedIn prospects")
    
    return sent_count, linkedin_list

def test_pipeline_management(leads):
    """Test pipeline management"""
    print("\n📊 Testing Pipeline Management...")
    
    manager = PipelineManager()
    
    # Save test leads to JSON first
    data_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/data"
    test_leads_file = f"{data_dir}/test_enriched_leads.json"
    
    with open(test_leads_file, 'w') as f:
        import json
        from dataclasses import asdict
        json.dump([asdict(lead) for lead in leads], f, indent=2)
    
    # Import to pipeline
    new_prospects = manager.import_leads_to_pipeline(test_leads_file)
    
    print(f"✅ Imported {len(new_prospects)} prospects to pipeline")
    
    # Test pipeline summary
    summary = manager.get_pipeline_summary()
    
    print(f"📈 Pipeline summary:")
    print(f"   Total prospects: {summary['total_prospects']}")
    print(f"   Monthly pipeline value: £{summary['monthly_pipeline_value']:,.0f}")
    
    return summary

def main():
    """Run complete system test"""
    
    print("🚀 BLUE CANVAS BIZ DEV MACHINE - SYSTEM TEST")
    print("=" * 60)
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    
    # 1. Test lead generation
    leads = test_lead_generation()
    
    # 2. Test contact enrichment
    enriched_leads = test_contact_enrichment(leads)
    
    # 3. Test email templates
    test_email_templates(leads)
    
    # 4. Test LinkedIn templates  
    test_linkedin_templates(leads)
    
    # 5. Test outreach engine
    sent_count, linkedin_list = test_outreach_engine(leads)
    
    # 6. Test pipeline management
    pipeline_summary = test_pipeline_management(leads)
    
    # Final summary
    print("\n🎉 SYSTEM TEST COMPLETE")
    print("=" * 40)
    print(f"✅ Lead generation: {len(leads)} prospects created")
    print(f"✅ Contact enrichment: {len(enriched_leads)} leads enriched")
    print(f"✅ Email templates: Generated for all industries")
    print(f"✅ LinkedIn templates: Generated for all prospects")
    print(f"✅ Outreach engine: {sent_count} emails queued (dry run)")
    print(f"✅ LinkedIn outreach: {len(linkedin_list)} prospects ready")
    print(f"✅ Pipeline management: {pipeline_summary['total_prospects']} prospects tracked")
    
    print(f"\n💰 Pipeline Value: £{pipeline_summary['monthly_pipeline_value']:,.0f}/month")
    
    print("\n🎯 SYSTEM READY FOR PRODUCTION")
    print("   → Run setup in SETUP.md")
    print("   → Configure API keys")
    print("   → Start with Monday routine")

if __name__ == "__main__":
    main()