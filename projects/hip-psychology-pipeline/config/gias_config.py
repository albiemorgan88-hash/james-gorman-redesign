# GIAS Configuration
import os

# GIAS API URLs
GIAS_BASE_URL = "https://get-information-schools.service.gov.uk"
GIAS_DOWNLOADS_URL = f"{GIAS_BASE_URL}/Downloads"

# Download URLs for establishment data
GIAS_ALL_ESTABLISHMENTS_URL = f"{GIAS_BASE_URL}/Establishments/download?format=csv"
GIAS_STATE_FUNDED_URL = f"{GIAS_BASE_URL}/Establishments/download/state-funded?format=csv"

# Direct CSV file URLs (updated daily)
ESTABLISHMENT_FIELDS_CSV = "https://get-information-schools.service.gov.uk/Establishments/download?format=csv"
STATE_FUNDED_CSV = "https://get-information-schools.service.gov.uk/Establishments/download/state-funded?format=csv"

# Filter criteria for schools
TARGET_REGIONS = [
    'Northern Ireland',
    'Belfast',
    'Derry', 
    'Londonderry',
    'Antrim',
    'Armagh',
    'Down',
    'Fermanagh',
    'Tyrone'
]

# School types to include
SCHOOL_TYPES = [
    'Secondary',
    'Academy',
    'Free School',
    'Grammar',
    'Secondary Modern'
]

# Key stages we're interested in
TARGET_KEY_STAGES = ['KS3', 'KS4']

# Output file paths
OUTPUT_DIR = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data"
SCHOOLS_OUTPUT_CSV = os.path.join(OUTPUT_DIR, "schools.csv")

# Required fields to extract
REQUIRED_FIELDS = [
    'URN',
    'EstablishmentName',
    'Street',
    'Locality', 
    'Address3',
    'Town',
    'County',
    'Postcode',
    'PhaseOfEducation',
    'StatutoryLowAge',
    'StatutoryHighAge',
    'NumberOfPupils',
    'HeadTitle',
    'HeadFirstName', 
    'HeadLastName',
    'SchoolWebsite',
    'TelephoneNum',
    'EstablishmentStatus',
    'TypeOfEstablishment'
]

# Test mode - limit to small number for initial testing
TEST_MODE = True
TEST_LIMIT = 20