# Zoho CRM Configuration
import os

# Zoho API configuration
ZOHO_BASE_URL = "https://www.zohoapis.eu"  # EU domain
ZOHO_CRM_URL = f"{ZOHO_BASE_URL}/crm/v2"

# Authentication (these should be set as environment variables)
ZOHO_CLIENT_ID = os.getenv('ZOHO_CLIENT_ID')
ZOHO_CLIENT_SECRET = os.getenv('ZOHO_CLIENT_SECRET') 
ZOHO_REFRESH_TOKEN = os.getenv('ZOHO_REFRESH_TOKEN')
ZOHO_ACCESS_TOKEN = os.getenv('ZOHO_ACCESS_TOKEN')

# CRM Module mappings
MODULES = {
    'contacts': 'Contacts',
    'accounts': 'Accounts', 
    'deals': 'Deals',
    'leads': 'Leads'
}

# Contact tags for different roles
ROLE_TAGS = {
    'SENCO': ['SENCO', 'Special Educational Needs', 'Budget Holder'],
    'Head of Year': ['Head of Year', 'KS3', 'KS4'], 
    'Vice Principal': ['Vice Principal', 'Senior Leadership', 'Budget Holder'],
    'Deputy Head': ['Deputy Head', 'Senior Leadership', 'Budget Holder'],
    'Assistant Head': ['Assistant Head', 'Senior Leadership']
}

# Deal/Opportunity configuration
DEAL_STAGE = 'Qualification'
DEAL_TYPE = 'New Business'
DEAL_SOURCE = 'Cold Outreach'

# Pipeline configuration for Hip Psychology
HIP_PSYCHOLOGY_PIPELINE = {
    'deal_name_template': 'Hip Psychology - {school_name}',
    'account_name_template': '{school_name}', 
    'deal_amount': 5000,  # Average deal value
    'probability': 10,    # Initial probability
    'close_date_days': 90  # 90 days from first contact
}

# Automated sequence configuration  
EMAIL_SEQUENCE_ID = None  # Will be set after sequence is created
SEQUENCE_DELAY_DAYS = [0, 3, 7, 14]  # Days between emails

# Output configuration
OUTPUT_DIR = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data"
ZOHO_OUTPUT_JSON = os.path.join(OUTPUT_DIR, "zoho_import_results.json")

# Success targets
TARGET_IMPORT_SUCCESS_RATE = 1.0  # Should be 100% for our own Zoho

# Required fields for Zoho import
ZOHO_CONTACT_FIELDS = [
    'First_Name',
    'Last_Name', 
    'Email',
    'Phone',
    'Account_Name',  # School name
    'Title',         # Role
    'Lead_Source',
    'Description'
]

ZOHO_ACCOUNT_FIELDS = [
    'Account_Name',
    'Website',
    'Phone', 
    'Billing_Street',
    'Billing_City',
    'Billing_Code',
    'Industry',
    'Description'
]