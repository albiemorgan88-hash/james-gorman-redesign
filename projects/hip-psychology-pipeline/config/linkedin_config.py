# LinkedIn Configuration
import os

# Search patterns for different roles
ROLE_SEARCH_PATTERNS = [
    "{school_name} SENCO",
    "{school_name} Head of Year",  
    "{school_name} Vice Principal",
    "{school_name} Deputy Head",
    "{school_name} Assistant Head",
    "{school_name} Special Educational Needs",
    "SENCO {school_name}",
    "Head of Year {school_name}",
    "Special Educational Needs Coordinator {school_name}"
]

# Alternative search patterns if school name doesn't work
ALT_SEARCH_PATTERNS = [
    "SENCO {location}",
    "Head of Year {location}", 
    "Special Educational Needs {location}"
]

# Target roles we're looking for
TARGET_ROLES = [
    'SENCO',
    'Special Educational Needs Coordinator', 
    'Head of Year',
    'Vice Principal',
    'Deputy Head',
    'Assistant Head',
    'Head of Department',
    'Learning Support',
    'Inclusion'
]

# LinkedIn scraping configuration
LINKEDIN_BASE_URL = "https://www.linkedin.com"
SEARCH_URL_TEMPLATE = f"{LINKEDIN_BASE_URL}/search/results/people/"

# Rate limiting and safety
MAX_REQUESTS_PER_MINUTE = 10
REQUEST_DELAY_SECONDS = 6
MAX_RETRIES = 3

# User agent rotation to avoid blocking
USER_AGENTS = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15'
]

# Output configuration
OUTPUT_DIR = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data"
LINKEDIN_OUTPUT_CSV = os.path.join(OUTPUT_DIR, "linkedin_contacts.csv")

# Success rate targets
TARGET_HIT_RATE = 0.6  # Aim for 60%+ success rate

# Fields to extract
LINKEDIN_FIELDS = [
    'school_urn',
    'school_name',
    'contact_name',
    'contact_title',
    'linkedin_url',
    'location',
    'current_position',
    'school_confirmed',
    'confidence_score'
]