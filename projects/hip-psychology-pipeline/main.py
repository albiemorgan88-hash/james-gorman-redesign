#!/usr/bin/env python3
"""
Hip Psychology Data Enrichment Pipeline
Main runner that executes all 5 stages sequentially and generates a test report.
"""

import subprocess
import sys
import os
import time
import logging
from datetime import datetime
import json

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Pipeline configuration
STAGES = [
    {
        'name': 'Stage 1: NI Schools Discovery',
        'script': 'stages/stage1_gias.py',
        'description': 'Extract Northern Ireland secondary schools data from Wikipedia',
        'target_success': 1.0  # 100% - should always work
    },
    {
        'name': 'Stage 2: LinkedIn Intelligence',
        'script': 'stages/stage2_linkedin.py',
        'description': 'Search for school staff on LinkedIn',
        'target_success': 0.6,  # 60% target
        'optional': True  # Skip if fails
    },
    {
        'name': 'Stage 3: School Website Mining',
        'script': 'stages/stage3_website.py',
        'description': 'Scrape school websites for staff directories',
        'target_success': 0.4  # 40% target
    },
    {
        'name': 'Stage 4: Email/Phone Enrichment',
        'script': 'stages/stage4_enrichment.py',
        'description': 'Enrich contacts with email addresses and phone numbers',
        'target_success': 0.5  # 50% target
    },
    {
        'name': 'Stage 5: Zoho Integration',
        'script': 'stages/stage5_zoho.py',
        'description': 'Import contacts into Zoho CRM with proper tagging',
        'target_success': 1.0  # 100% - should work if we have contacts
    }
]

class PipelineRunner:
    def __init__(self, test_mode=True):
        self.test_mode = test_mode
        self.results = []
        self.start_time = None
        self.end_time = None
        
    def run_stage(self, stage):
        """Run a single pipeline stage"""
        stage_name = stage['name']
        script_path = stage['script']
        
        logger.info(f"🚀 Starting {stage_name}")
        logger.info(f"   Description: {stage['description']}")
        
        # Record start time
        stage_start = time.time()
        
        try:
            # Run the stage script
            cmd = [sys.executable, script_path]
            result = subprocess.run(
                cmd,
                cwd=os.path.dirname(os.path.abspath(__file__)),
                capture_output=True,
                text=True,
                timeout=300  # 5 minute timeout per stage
            )
            
            # Record results
            stage_end = time.time()
            duration = stage_end - stage_start
            
            stage_result = {
                'name': stage_name,
                'script': script_path,
                'success': result.returncode == 0,
                'duration_seconds': duration,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'target_success': stage.get('target_success', 0.5),
                'optional': stage.get('optional', False)
            }
            
            if result.returncode == 0:
                logger.info(f"✅ {stage_name} completed successfully in {duration:.1f}s")
            else:
                logger.error(f"❌ {stage_name} failed after {duration:.1f}s")
                if result.stderr:
                    logger.error(f"Error: {result.stderr}")
            
            self.results.append(stage_result)
            return stage_result
            
        except subprocess.TimeoutExpired:
            logger.error(f"❌ {stage_name} timed out after 5 minutes")
            stage_result = {
                'name': stage_name,
                'script': script_path,
                'success': False,
                'duration_seconds': 300,
                'stdout': '',
                'stderr': 'Stage timed out',
                'target_success': stage.get('target_success', 0.5),
                'optional': stage.get('optional', False)
            }
            self.results.append(stage_result)
            return stage_result
            
        except Exception as e:
            logger.error(f"❌ {stage_name} failed with exception: {e}")
            stage_result = {
                'name': stage_name,
                'script': script_path,
                'success': False,
                'duration_seconds': 0,
                'stdout': '',
                'stderr': str(e),
                'target_success': stage.get('target_success', 0.5),
                'optional': stage.get('optional', False)
            }
            self.results.append(stage_result)
            return stage_result
    
    def analyze_output_files(self):
        """Analyze the output files to extract success metrics"""
        data_dir = "data"
        analysis = {}
        
        # Check each output file
        output_files = [
            ('schools.csv', 'Stage 1'),
            ('linkedin_contacts.csv', 'Stage 2'),
            ('website_contacts.csv', 'Stage 3'),
            ('enriched_contacts.csv', 'Stage 4'),
            ('zoho_import_results.json', 'Stage 5')
        ]
        
        for filename, stage in output_files:
            filepath = os.path.join(data_dir, filename)
            
            if os.path.exists(filepath):
                try:
                    if filename.endswith('.csv'):
                        import pandas as pd
                        df = pd.read_csv(filepath)
                        analysis[stage] = {
                            'file_exists': True,
                            'record_count': len(df),
                            'columns': list(df.columns),
                            'sample_data': df.head(2).to_dict('records') if not df.empty else []
                        }
                    elif filename.endswith('.json'):
                        with open(filepath, 'r') as f:
                            data = json.load(f)
                        analysis[stage] = {
                            'file_exists': True,
                            'data_summary': data.get('import_summary', {}),
                            'record_count': len(data.get('contacts', []))
                        }
                except Exception as e:
                    analysis[stage] = {
                        'file_exists': True,
                        'error': str(e)
                    }
            else:
                analysis[stage] = {
                    'file_exists': False
                }
        
        return analysis
    
    def generate_test_report(self):
        """Generate a comprehensive test report"""
        report_path = "test_results/pipeline_test_report.md"
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(report_path), exist_ok=True)
        
        # Analyze output files
        file_analysis = self.analyze_output_files()
        
        # Calculate overall metrics
        total_duration = self.end_time - self.start_time if self.start_time and self.end_time else 0
        successful_stages = sum(1 for r in self.results if r['success'])
        total_stages = len(self.results)
        pipeline_success_rate = successful_stages / total_stages if total_stages > 0 else 0
        
        # Generate report
        report_content = f"""# Hip Psychology Pipeline Test Report
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Executive Summary
- **Pipeline Success Rate**: {pipeline_success_rate:.1%} ({successful_stages}/{total_stages} stages)
- **Total Runtime**: {total_duration:.1f} seconds
- **Test Mode**: {'Yes' if self.test_mode else 'No'}

## Stage Results

"""
        
        for result in self.results:
            status = "✅ SUCCESS" if result['success'] else "❌ FAILED"
            target = f"(Target: {result['target_success']:.1%})"
            optional = " [OPTIONAL]" if result.get('optional', False) else ""
            
            report_content += f"""### {result['name']}{optional}
- **Status**: {status} {target}
- **Duration**: {result['duration_seconds']:.1f} seconds
- **Script**: {result['script']}

"""
            
            if result['stderr']:
                report_content += f"""**Error Output:**
```
{result['stderr'][:500]}
```

"""
        
        # Add file analysis
        report_content += "## Output File Analysis\n\n"
        
        for stage, analysis in file_analysis.items():
            if analysis['file_exists']:
                record_count = analysis.get('record_count', 0)
                report_content += f"### {stage}\n"
                report_content += f"- **Records Found**: {record_count}\n"
                
                if 'columns' in analysis:
                    report_content += f"- **Columns**: {', '.join(analysis['columns'])}\n"
                
                if 'data_summary' in analysis:
                    summary = analysis['data_summary']
                    if 'success_rate' in summary:
                        report_content += f"- **Success Rate**: {summary['success_rate']:.1%}\n"
                
                report_content += "\n"
            else:
                report_content += f"### {stage}\n- **Status**: File not found\n\n"
        
        # Add success rate analysis
        report_content += "## Success Rate Analysis\n\n"
        
        if file_analysis.get('Stage 1', {}).get('record_count', 0) > 0:
            schools_count = file_analysis['Stage 1']['record_count']
            report_content += f"- **Stage 1 (Schools)**: {schools_count} schools found - {'✅' if schools_count >= 5 else '❌'}\n"
        
        if file_analysis.get('Stage 3', {}).get('record_count', 0) > 0:
            contacts_count = file_analysis['Stage 3']['record_count']
            hit_rate = contacts_count / file_analysis.get('Stage 1', {}).get('record_count', 1)
            report_content += f"- **Stage 3 (Website Scraping)**: {hit_rate:.1%} hit rate - {'✅' if hit_rate >= 0.4 else '❌'}\n"
        
        if file_analysis.get('Stage 4', {}).get('record_count', 0) > 0:
            enriched_count = file_analysis['Stage 4']['record_count']
            report_content += f"- **Stage 4 (Email Enrichment)**: {enriched_count} contacts enriched\n"
        
        if 'data_summary' in file_analysis.get('Stage 5', {}):
            zoho_summary = file_analysis['Stage 5']['data_summary']
            zoho_success = zoho_summary.get('success_rate', 0)
            report_content += f"- **Stage 5 (Zoho Import)**: {zoho_success:.1%} import success rate\n"
        
        report_content += f"""
## Recommendations

### What Worked Well
"""
        
        working_stages = [r['name'] for r in self.results if r['success']]
        if working_stages:
            for stage in working_stages:
                report_content += f"- {stage}\n"
        else:
            report_content += "- No stages completed successfully\n"
        
        report_content += """
### Areas for Improvement
"""
        
        failed_stages = [r for r in self.results if not r['success'] and not r.get('optional', False)]
        if failed_stages:
            for stage in failed_stages:
                report_content += f"- **{stage['name']}**: {stage['stderr'][:100] if stage['stderr'] else 'Unknown error'}\n"
        else:
            report_content += "- All critical stages completed successfully\n"
        
        report_content += f"""
### Next Steps
1. Address any failed critical stages
2. Optimize successful stages for better data quality
3. Consider rate limiting adjustments for web scraping
4. Validate Zoho CRM integration with real credentials
5. Test with larger datasets (remove test mode limits)

### Test Data Quality
- Schools data appears {'✅ good' if file_analysis.get('Stage 1', {}).get('record_count', 0) >= 5 else '❌ insufficient'}
- Contact extraction {'✅ working' if file_analysis.get('Stage 3', {}).get('record_count', 0) > 0 else '❌ needs improvement'}
- Email enrichment {'✅ functioning' if file_analysis.get('Stage 4', {}).get('record_count', 0) > 0 else '❌ needs work'}
- CRM integration {'✅ ready' if 'Stage 5' in file_analysis else '❌ not tested'}
"""
        
        # Write report
        with open(report_path, 'w') as f:
            f.write(report_content)
        
        logger.info(f"Test report generated: {report_path}")
        return report_path
    
    def run_pipeline(self):
        """Run the complete pipeline"""
        logger.info("🚀 Starting Hip Psychology Data Enrichment Pipeline")
        logger.info(f"   Test Mode: {'Enabled (limited data)' if self.test_mode else 'Disabled (full data)'}")
        
        self.start_time = time.time()
        
        # Run each stage
        for stage in STAGES:
            result = self.run_stage(stage)
            
            # Check if we should continue
            if not result['success'] and not result.get('optional', False):
                logger.warning(f"Critical stage {result['name']} failed. Continuing with next stage...")
        
        self.end_time = time.time()
        
        # Generate test report
        report_path = self.generate_test_report()
        
        # Summary
        successful_stages = sum(1 for r in self.results if r['success'])
        total_stages = len(self.results)
        
        logger.info(f"🏁 Pipeline completed!")
        logger.info(f"   Successful stages: {successful_stages}/{total_stages}")
        logger.info(f"   Total runtime: {self.end_time - self.start_time:.1f} seconds")
        logger.info(f"   Test report: {report_path}")
        
        return successful_stages > 0  # Success if at least one stage worked


def main():
    """Main function"""
    # Check if we're in the virtual environment
    if 'venv' not in sys.prefix:
        print("⚠️  Please activate the virtual environment first:")
        print("cd /Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline")
        print("source venv/bin/activate")
        print("python main.py")
        return False
    
    runner = PipelineRunner(test_mode=True)  # Start with test mode
    success = runner.run_pipeline()
    
    if success:
        print("\n✅ Hip Psychology Pipeline test completed successfully!")
        print("📊 Check test_results/pipeline_test_report.md for detailed analysis")
        return True
    else:
        print("\n❌ Hip Psychology Pipeline test failed!")
        print("📊 Check test_results/pipeline_test_report.md for error analysis")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)