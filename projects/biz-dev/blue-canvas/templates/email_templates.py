#!/usr/bin/env python3
"""
Blue Canvas Email Templates
Industry-specific, value-first outreach sequences
"""

from dataclasses import dataclass
from typing import Dict, List
from lead_generator import Lead

@dataclass
class EmailTemplate:
    subject: str
    body: str
    industry: str
    sequence_step: int = 1
    
class EmailTemplates:
    
    @staticmethod
    def get_template(industry: str, sequence_step: int = 1) -> EmailTemplate:
        """Get appropriate template for industry and sequence step"""
        
        templates = {
            # ACCOUNTING FIRMS
            'accounting': {
                1: EmailTemplate(
                    subject="Quick question about {company_name}'s digital efficiency",
                    body="""Hi {decision_maker},

I came across {company_name} and noticed you're doing solid work in the {location} accounting space.

Quick question - are you finding that manual processes are eating into time you'd rather spend with clients? 

Most accounting firms we work with tell us they're spending 10-15 hours a week on admin tasks that could be automated (client onboarding, document collection, follow-ups).

We've helped similar practices in Northern Ireland cut that admin time by 70% using simple AI automation.

Worth a quick chat to see if there's a fit?

Best regards,
Phil Patterson
Blue Canvas AI Consultancy
bluecanvas.ai""",
                    industry='accounting',
                    sequence_step=1
                ),
                2: EmailTemplate(
                    subject="Following up - automation for {company_name}",
                    body="""Hi {decision_maker},

Following up on my note about automation for {company_name}.

I put together a quick assessment showing exactly which processes accounting firms like yours can automate first:

• Client onboarding workflows (saves 3-4 hrs/week)
• Automated document requests 
• Invoice follow-up sequences
• Tax deadline reminders

The best part? Most of these can be set up in a few days, not months.

Would 15 minutes next week make sense to show you what this could look like for {company_name}?

Best,
Phil Patterson
Blue Canvas""",
                    industry='accounting',
                    sequence_step=2
                )
            },
            
            # LEGAL/SOLICITORS
            'legal': {
                1: EmailTemplate(
                    subject="Helping {company_name} win more cases through better client management",
                    body="""Hi {decision_maker},

I noticed {company_name} serves clients across {location} - impressive client base.

Quick question: How much time does your team spend chasing clients for documents, scheduling meetings, and managing case communications?

We've worked with several solicitor practices in NI who were losing 12+ hours a week to these admin tasks. Now they have automated systems that:

• Collect client documents automatically
• Send deadline reminders 
• Schedule meetings seamlessly
• Track case progress in real-time

This frees them up to focus on what matters - winning cases and serving clients.

Worth exploring how this could work for {company_name}?

Best regards,
Phil Patterson
Blue Canvas AI Consultancy""",
                    industry='legal',
                    sequence_step=1
                ),
                2: EmailTemplate(
                    subject="Case study: How Murphy & Associates doubled capacity",
                    body="""Hi {decision_maker},

Thought you'd find this interesting - Murphy & Associates (similar practice to {company_name}) just doubled their case capacity without hiring new staff.

How? They automated their entire client journey:

✓ Automated intake forms capture all client details upfront
✓ Document collection happens automatically via secure links  
✓ Case updates send automatically to clients
✓ Meeting scheduling is fully self-service

Result: Partners now spend 80% of their time on billable work instead of admin.

I can show you exactly how they did it. Worth 20 minutes next week?

Best,
Phil Patterson""",
                    industry='legal',
                    sequence_step=2
                )
            },
            
            # BEAUTY SALONS
            'beauty': {
                1: EmailTemplate(
                    subject="Is {company_name} losing bookings to online competitors?",
                    body="""Hi {decision_maker},

Love what you're doing at {company_name} - {location} is lucky to have such a quality salon.

Quick question: Are you finding that clients expect to book online these days, and maybe going elsewhere when they can't book with you instantly?

We've helped several salons across NI set up booking systems that:

• Let clients book 24/7 from their phones
• Send automatic reminders (reducing no-shows by 60%)
• Handle rescheduling automatically
• Collect payments upfront

The salons using this are typically booked 2-3 weeks out because it's so convenient for clients.

Worth a quick chat about what this could do for {company_name}?

Best,
Phil Patterson
Blue Canvas""",
                    industry='beauty',
                    sequence_step=1
                ),
                2: EmailTemplate(
                    subject="How Glow Beauty increased bookings 40% in 6 weeks",
                    body="""Hi {decision_maker},

Quick update - Glow Beauty in Belfast just hit a 40% increase in bookings since implementing online booking.

Here's what changed:
• Clients can now book treatments instantly on their phones
• Automatic SMS reminders cut no-shows from 15% to 3%  
• Weekend/evening bookings increased 60% (clients book when it's convenient for them)
• Average booking value up 25% (easy to add services during online booking)

The system literally pays for itself through reduced no-shows alone.

Want to see how this would work for {company_name}? I can show you in 15 minutes.

Best,
Phil""",
                    industry='beauty',
                    sequence_step=2
                )
            },
            
            # RESTAURANTS
            'restaurant': {
                1: EmailTemplate(
                    subject="Quick win for {company_name} - reduce no-shows by 60%",
                    body="""Hi {decision_maker},

{company_name} looks fantastic - the reviews speak for themselves!

Quick question: How often do you get hit with no-shows, especially on busy nights?

We've helped restaurants across NI reduce no-shows by 60% using simple automation:

• Automatic booking confirmations
• SMS reminders 24hrs & 2hrs before reservation
• Easy rebooking for customers who need to cancel
• Waitlist management for busy periods

One restaurant in Derry saw no-shows drop from 20% to 7% in the first month alone.

Worth 15 minutes to show you how this works?

Best,
Phil Patterson
Blue Canvas""",
                    industry='restaurant',
                    sequence_step=1
                ),
                2: EmailTemplate(
                    subject="Case study: The Merchant's Table transformation",
                    body="""Hi {decision_maker},

Thought you'd appreciate this - The Merchant's Table just shared their results after 3 months with automated systems:

📈 No-shows down 65% (from 18% to 6%)
📈 Table turnover up 30% 
📈 Customer satisfaction up (they love the convenience)
📈 Staff stress down (no more chasing confirmations)

The owner told me: "I wish we'd done this years ago. It's like having an extra staff member who never sleeps."

Similar results possible for {company_name}?

Happy to show you exactly how in 20 minutes next week.

Best,
Phil""",
                    industry='restaurant',
                    sequence_step=2
                )
            },
            
            # DEFAULT/GENERAL
            'default': {
                1: EmailTemplate(
                    subject="Quick automation win for {company_name}?",
                    body="""Hi {decision_maker},

I came across {company_name} and was impressed by what you're building in {location}.

Quick question: What's the most time-consuming admin task your team deals with daily?

We help businesses like yours automate the repetitive stuff so you can focus on what matters - growing the business and serving customers.

Common quick wins we see:
• Automated customer follow-ups
• Online booking/scheduling systems  
• Document collection workflows
• Invoice and payment reminders

Most take just days to implement, not months.

Worth a 15-minute chat to explore what might make sense for {company_name}?

Best regards,
Phil Patterson
Blue Canvas AI Consultancy""",
                    industry='default',
                    sequence_step=1
                ),
                2: EmailTemplate(
                    subject="Following up - automation opportunities for {company_name}",
                    body="""Hi {decision_maker},

Following up on my note about automation opportunities for {company_name}.

I've been thinking about your industry and the challenges businesses like yours face. 

Most successful companies in your space are already using automation to:
• Handle routine customer communications
• Streamline appointment/project scheduling
• Automate invoice collection
• Manage customer onboarding

The competitive advantage comes from having these systems work seamlessly in the background while you focus on delivering great service.

Would 20 minutes next week make sense to explore what this could look like for {company_name}?

Best,
Phil Patterson""",
                    industry='default',
                    sequence_step=2
                )
            }
        }
        
        # Find matching industry or use default
        industry_key = 'default'
        for key in templates.keys():
            if key in industry.lower():
                industry_key = key
                break
                
        return templates[industry_key].get(sequence_step, templates['default'][1])
    
    @staticmethod
    def personalize_template(template: EmailTemplate, lead: Lead) -> EmailTemplate:
        """Personalize template with lead data"""
        
        # Basic substitutions
        subject = template.subject.format(
            company_name=lead.company_name,
            decision_maker=lead.decision_maker.split()[0] if lead.decision_maker else "there",
            location=lead.location
        )
        
        body = template.body.format(
            company_name=lead.company_name,
            decision_maker=lead.decision_maker.split()[0] if lead.decision_maker else "there",
            location=lead.location.split(',')[0] if lead.location else "your area"
        )
        
        # Add pain point specific content
        if lead.pain_points:
            pain_point_additions = {
                "No website": "\n\nP.S. I noticed you don't have a website yet - that's actually a great opportunity. We can help you build a professional online presence that drives real business results.",
                "Not mobile-optimized": "\n\nP.S. I noticed your website might not be mobile-optimized. With 70% of your customers browsing on phones, this could be costing you business daily.",
                "No online booking system": "\n\nP.S. I see you don't have online booking yet - that's a quick win. Most businesses see 20-30% more bookings when customers can book instantly from their phones.",
                "No SSL certificate": "\n\nP.S. Quick heads up - your website doesn't have SSL security. This is likely hurting your Google rankings and customer trust. Easy fix though!",
                "Poor SEO setup": "\n\nP.S. There might be some quick SEO wins for your website. Small changes could help more local customers find you on Google."
            }
            
            for pain_point in lead.pain_points[:1]:  # Just add one pain point
                if pain_point in pain_point_additions:
                    body += pain_point_additions[pain_point]
                    break
        
        return EmailTemplate(
            subject=subject,
            body=body,
            industry=template.industry,
            sequence_step=template.sequence_step
        )

# LinkedIn Templates
class LinkedInTemplates:
    
    @staticmethod
    def get_connection_request(lead: Lead) -> str:
        """Get LinkedIn connection request message"""
        
        templates = [
            f"Hi {lead.decision_maker.split()[0] if lead.decision_maker else 'there'}, I help businesses like {lead.company_name} automate time-consuming processes. Would love to connect and share some insights that might be useful for your team.",
            
            f"Hi {lead.decision_maker.split()[0] if lead.decision_maker else 'there'}, I noticed {lead.company_name} is doing great work in {lead.location}. I work with similar businesses on automation and efficiency - would be great to connect!",
            
            f"Hi {lead.decision_maker.split()[0] if lead.decision_maker else 'there'}, I help business owners in {lead.location.split(',')[0] if lead.location else 'your area'} save 10+ hours a week through smart automation. Would love to share some ideas that might help {lead.company_name}."
        ]
        
        # Choose template based on lead score
        template_index = min(lead.digital_maturity_score // 4, len(templates) - 1)
        return templates[template_index]
    
    @staticmethod
    def get_follow_up_message(lead: Lead) -> str:
        """Get LinkedIn follow-up message"""
        
        return f"""Thanks for connecting! 

I've been working with businesses like {lead.company_name} to automate the time-consuming stuff that pulls focus away from customers and growth.

Quick question - what's the biggest operational challenge you're facing right now? 

Most business owners tell me it's things like:
• Following up with prospects
• Managing customer communications  
• Scheduling and calendar management
• Collecting payments/documents

These are exactly the kinds of things that can be automated to run seamlessly in the background.

Worth a quick chat to explore what might make sense for {lead.company_name}?"""

def main():
    # Test templates
    test_lead = Lead(
        company_name="Murphy & Associates",
        industry="legal services", 
        location="Belfast, Northern Ireland",
        decision_maker="John Murphy",
        pain_points=["No online booking system", "Poor SEO setup"]
    )
    
    # Test email template
    template = EmailTemplates.get_template('legal', 1)
    personalized = EmailTemplates.personalize_template(template, test_lead)
    
    print("📧 Email Template Test:")
    print(f"Subject: {personalized.subject}")
    print(f"Body:\n{personalized.body}")
    print("\n" + "="*50 + "\n")
    
    # Test LinkedIn template
    linkedin_request = LinkedInTemplates.get_connection_request(test_lead)
    print("💼 LinkedIn Connection Request:")
    print(linkedin_request)

if __name__ == "__main__":
    main()