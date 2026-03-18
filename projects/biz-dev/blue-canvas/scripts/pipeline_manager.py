#!/usr/bin/env python3
"""
Blue Canvas Pipeline Management
Track leads through the sales funnel with scoring and automation
"""

import os
import json
import csv
from datetime import datetime, timedelta
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional
from enum import Enum

class PipelineStage(Enum):
    LEAD = "lead"
    CONTACTED = "contacted" 
    RESPONDED = "responded"
    QUALIFIED = "qualified"
    PROPOSAL = "proposal"
    WON = "won"
    LOST = "lost"

@dataclass
class PipelineProspect:
    company_name: str
    decision_maker: str
    email: str
    phone: str
    industry: str
    location: str
    website: str
    stage: str
    digital_maturity_score: int
    estimated_value: str
    pain_points: List[str]
    last_contact: str
    next_action: str
    next_action_date: str
    source: str
    created_at: str
    notes: str = ""
    proposal_sent: str = ""
    probability: int = 0  # 0-100%
    
    def __post_init__(self):
        if not self.created_at:
            self.created_at = datetime.now().isoformat()

class PipelineManager:
    def __init__(self):
        self.data_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/data"
        self.pipeline_file = f"{self.data_dir}/pipeline.json"
        os.makedirs(self.data_dir, exist_ok=True)
        
    def load_pipeline(self) -> List[PipelineProspect]:
        """Load current pipeline"""
        if os.path.exists(self.pipeline_file):
            with open(self.pipeline_file, 'r') as f:
                data = json.load(f)
                return [PipelineProspect(**record) for record in data]
        return []
    
    def save_pipeline(self, prospects: List[PipelineProspect]):
        """Save pipeline to file"""
        with open(self.pipeline_file, 'w') as f:
            json.dump([asdict(prospect) for prospect in prospects], f, indent=2)
    
    def import_leads_to_pipeline(self, leads_file: str):
        """Import leads from enriched leads file to pipeline"""
        
        # Load existing pipeline
        pipeline = self.load_pipeline()
        existing_companies = {p.company_name for p in pipeline}
        
        # Load leads
        with open(leads_file, 'r') as f:
            lead_data = json.load(f)
        
        new_prospects = []
        
        for data in lead_data:
            # Skip if already in pipeline
            if data['company_name'] in existing_companies:
                continue
                
            # Estimate deal value based on industry and company size
            estimated_value = self.estimate_deal_value(data.get('industry', ''), data.get('employee_count', ''))
            
            prospect = PipelineProspect(
                company_name=data['company_name'],
                decision_maker=data.get('decision_maker', ''),
                email=data.get('email', ''),
                phone=data.get('phone', ''),
                industry=data.get('industry', ''),
                location=data.get('location', ''),
                website=data.get('website', ''),
                stage=PipelineStage.LEAD.value,
                digital_maturity_score=data.get('digital_maturity_score', 0),
                estimated_value=estimated_value,
                pain_points=data.get('pain_points', []),
                last_contact="",
                next_action="Initial outreach",
                next_action_date=(datetime.now() + timedelta(days=1)).isoformat(),
                source=data.get('source', 'apollo'),
                created_at=datetime.now().isoformat(),
                probability=self.calculate_initial_probability(data)
            )
            
            new_prospects.append(prospect)
            pipeline.append(prospect)
        
        # Save updated pipeline
        self.save_pipeline(pipeline)
        
        print(f"📊 Imported {len(new_prospects)} new prospects to pipeline")
        print(f"📈 Total pipeline prospects: {len(pipeline)}")
        
        return new_prospects
    
    def estimate_deal_value(self, industry: str, employee_count: str) -> str:
        """Estimate potential deal value"""
        
        # Base values by industry (monthly retainer potential)
        industry_values = {
            'accounting': {'base': 800, 'max': 2500},
            'legal': {'base': 1000, 'max': 3000},
            'real estate': {'base': 600, 'max': 2000},
            'beauty': {'base': 400, 'max': 1200},
            'restaurant': {'base': 500, 'max': 1500},
            'dental': {'base': 800, 'max': 2500},
            'veterinary': {'base': 700, 'max': 2000},
            'construction': {'base': 600, 'max': 2000},
            'retail': {'base': 500, 'max': 1500}
        }
        
        # Find industry match
        base_value = 600
        max_value = 1800
        
        for ind, values in industry_values.items():
            if ind in industry.lower():
                base_value = values['base']
                max_value = values['max']
                break
        
        # Adjust for company size
        try:
            if employee_count:
                emp_str = str(employee_count).replace(',', '')
                if '-' in emp_str:
                    emp_count = int(emp_str.split('-')[0])
                else:
                    emp_count = int(emp_str)
                
                if emp_count > 20:
                    multiplier = 1.5
                elif emp_count > 10:
                    multiplier = 1.2
                else:
                    multiplier = 1.0
                    
                base_value = int(base_value * multiplier)
                max_value = int(max_value * multiplier)
        except:
            pass
        
        return f"£{base_value}-{max_value}/month"
    
    def calculate_initial_probability(self, lead_data: Dict) -> int:
        """Calculate initial win probability based on lead quality"""
        
        probability = 10  # Base probability
        
        # Digital maturity score adds probability
        probability += lead_data.get('digital_maturity_score', 0) * 5
        
        # Has email contact
        if lead_data.get('email'):
            probability += 15
            
        # High-need industries
        high_need = ['accounting', 'legal', 'beauty', 'restaurant']
        if any(ind in lead_data.get('industry', '').lower() for ind in high_need):
            probability += 10
            
        # Local (easier to close)
        if 'northern ireland' in lead_data.get('location', '').lower():
            probability += 10
        
        return min(probability, 60)  # Cap at 60% for new leads
    
    def update_prospect_stage(self, company_name: str, new_stage: PipelineStage, notes: str = ""):
        """Update prospect stage and probability"""
        
        pipeline = self.load_pipeline()
        
        for prospect in pipeline:
            if prospect.company_name == company_name:
                prospect.stage = new_stage.value
                prospect.last_contact = datetime.now().isoformat()
                
                if notes:
                    prospect.notes += f"\n{datetime.now().strftime('%Y-%m-%d')}: {notes}"
                
                # Update probability based on stage
                stage_probabilities = {
                    PipelineStage.LEAD.value: prospect.probability,  # Keep original
                    PipelineStage.CONTACTED.value: max(prospect.probability, 15),
                    PipelineStage.RESPONDED.value: 30,
                    PipelineStage.QUALIFIED.value: 50,
                    PipelineStage.PROPOSAL.value: 70,
                    PipelineStage.WON.value: 100,
                    PipelineStage.LOST.value: 0
                }
                
                prospect.probability = stage_probabilities.get(new_stage.value, prospect.probability)
                
                # Set next actions
                if new_stage == PipelineStage.CONTACTED:
                    prospect.next_action = "Wait for response / Follow up"
                    prospect.next_action_date = (datetime.now() + timedelta(days=4)).isoformat()
                elif new_stage == PipelineStage.RESPONDED:
                    prospect.next_action = "Qualify needs and pain points"
                    prospect.next_action_date = (datetime.now() + timedelta(days=1)).isoformat()
                elif new_stage == PipelineStage.QUALIFIED:
                    prospect.next_action = "Prepare and send proposal"
                    prospect.next_action_date = (datetime.now() + timedelta(days=3)).isoformat()
                elif new_stage == PipelineStage.PROPOSAL:
                    prospect.next_action = "Follow up on proposal"
                    prospect.next_action_date = (datetime.now() + timedelta(days=7)).isoformat()
                
                break
        
        self.save_pipeline(pipeline)
        print(f"✅ Updated {company_name} to stage: {new_stage.value}")
    
    def get_pipeline_summary(self) -> Dict:
        """Get pipeline summary and metrics"""
        
        pipeline = self.load_pipeline()
        
        # Stage counts
        stage_counts = {}
        stage_values = {}
        
        for stage in PipelineStage:
            prospects_in_stage = [p for p in pipeline if p.stage == stage.value]
            stage_counts[stage.value] = len(prospects_in_stage)
            
            # Calculate stage value (probability-weighted)
            total_value = 0
            for prospect in prospects_in_stage:
                try:
                    # Extract minimum value from range
                    value_str = prospect.estimated_value
                    min_value = int(value_str.split('£')[1].split('-')[0].replace(',', ''))
                    weighted_value = min_value * (prospect.probability / 100)
                    total_value += weighted_value
                except:
                    pass
            
            stage_values[stage.value] = total_value
        
        # Get overdue actions
        today = datetime.now()
        overdue_actions = []
        
        for prospect in pipeline:
            if prospect.next_action_date:
                try:
                    action_date = datetime.fromisoformat(prospect.next_action_date)
                    if action_date <= today and prospect.stage not in ['won', 'lost']:
                        overdue_actions.append({
                            'company': prospect.company_name,
                            'action': prospect.next_action,
                            'due_date': prospect.next_action_date,
                            'days_overdue': (today - action_date).days
                        })
                except:
                    pass
        
        # Calculate monthly pipeline value
        monthly_pipeline_value = sum(stage_values.values())
        
        return {
            'total_prospects': len(pipeline),
            'stage_counts': stage_counts,
            'stage_values': stage_values,
            'monthly_pipeline_value': monthly_pipeline_value,
            'overdue_actions': overdue_actions,
            'conversion_rates': self.calculate_conversion_rates(pipeline)
        }
    
    def calculate_conversion_rates(self, pipeline: List[PipelineProspect]) -> Dict:
        """Calculate conversion rates between stages"""
        
        stage_order = ['lead', 'contacted', 'responded', 'qualified', 'proposal', 'won']
        conversions = {}
        
        for i in range(len(stage_order) - 1):
            current_stage = stage_order[i]
            next_stage = stage_order[i + 1]
            
            current_count = len([p for p in pipeline if p.stage == current_stage])
            next_count = len([p for p in pipeline if p.stage == next_stage])
            
            # Include all prospects who have passed through this stage
            total_through_current = len([p for p in pipeline 
                                       if stage_order.index(p.stage) >= i])
            
            if total_through_current > 0:
                conversion_rate = (next_count / total_through_current) * 100
            else:
                conversion_rate = 0
                
            conversions[f"{current_stage}_to_{next_stage}"] = round(conversion_rate, 1)
        
        return conversions
    
    def export_pipeline_report(self) -> str:
        """Export pipeline to CSV for analysis"""
        
        pipeline = self.load_pipeline()
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        report_file = f"{self.data_dir}/pipeline_report_{timestamp}.csv"
        
        with open(report_file, 'w', newline='', encoding='utf-8') as csvfile:
            if pipeline:
                writer = csv.DictWriter(csvfile, fieldnames=asdict(pipeline[0]).keys())
                writer.writeheader()
                for prospect in pipeline:
                    row = asdict(prospect)
                    row['pain_points'] = '; '.join(row['pain_points'])
                    writer.writerow(row)
        
        return report_file

def main():
    """Test pipeline manager"""
    
    manager = PipelineManager()
    
    # Load latest enriched leads if available
    import glob
    
    enriched_files = glob.glob(f"{manager.data_dir}/enriched_leads_*.json")
    if enriched_files:
        latest_file = max(enriched_files, key=os.path.getctime)
        print(f"📂 Importing leads from {latest_file}")
        manager.import_leads_to_pipeline(latest_file)
    
    # Get pipeline summary
    summary = manager.get_pipeline_summary()
    
    print("\n📊 PIPELINE SUMMARY")
    print("=" * 50)
    print(f"Total prospects: {summary['total_prospects']}")
    print(f"Monthly pipeline value: £{summary['monthly_pipeline_value']:,.0f}")
    print()
    
    print("📈 STAGE BREAKDOWN:")
    for stage, count in summary['stage_counts'].items():
        value = summary['stage_values'][stage]
        print(f"{stage.title()}: {count} prospects (£{value:,.0f} weighted value)")
    
    print("\n🔄 CONVERSION RATES:")
    for conversion, rate in summary['conversion_rates'].items():
        print(f"{conversion.replace('_', ' → ').title()}: {rate}%")
    
    if summary['overdue_actions']:
        print(f"\n⚠️  OVERDUE ACTIONS ({len(summary['overdue_actions'])}):")
        for action in summary['overdue_actions']:
            print(f"• {action['company']}: {action['action']} ({action['days_overdue']} days overdue)")
    
    # Export report
    report_file = manager.export_pipeline_report()
    print(f"\n💾 Pipeline report saved to: {report_file}")

if __name__ == "__main__":
    main()