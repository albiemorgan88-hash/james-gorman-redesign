#!/usr/bin/env python3
"""
Create "OpenClaw Consultant" Google Ads campaign.
Account: 801-851-4760 | Landing: https://openclawconsultant.co.uk
⚠️ NEVER touches "Blue Canvas - AI Audit" campaign or Storage Centre NI.
⚠️ Creates campaign as PAUSED — PJ reviews before enabling.

Usage: source ~/.zprofile && python3 openclaw_ads_campaign.py
"""

import os
import sys
import uuid
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = os.environ.get("GOOGLE_ADS_ACCOUNT_ID", "801-851-4760").replace("-", "")
assert CUSTOMER_ID == "8018514760", f"WRONG ACCOUNT! Got {CUSTOMER_ID}. Aborting."

CAMPAIGN_NAME = "OpenClaw Consultant"
AD_GROUP_NAME = "OpenClaw Keywords"
BUDGET_MICROS = 10_000_000  # £10/day
LANDING_URL = "https://openclawconsultant.co.uk"

# UK geo target constant: 2826
UK_GEO_TARGET = "2826"


def get_client():
    config = {
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(config, version="v23")


def check_campaign_exists(client):
    """Abort if campaign already exists."""
    service = client.get_service("GoogleAdsService")
    query = f"""
        SELECT campaign.id, campaign.name, campaign.status
        FROM campaign
        WHERE campaign.name = '{CAMPAIGN_NAME}'
    """
    response = service.search_stream(customer_id=CUSTOMER_ID, query=query)
    for batch in response:
        for row in batch.results:
            print(f"⚠️ Campaign '{CAMPAIGN_NAME}' already exists (id={row.campaign.id}, status={row.campaign.status.name})")
            print("Exiting to avoid duplicates. Delete or rename the existing campaign first.")
            sys.exit(1)


def create_budget(client):
    """Create a shared daily budget of £10."""
    service = client.get_service("CampaignBudgetService")
    op = client.get_type("CampaignBudgetOperation")
    budget = op.create
    budget.name = f"OpenClaw Consultant Budget - {uuid.uuid4().hex[:8]}"
    budget.amount_micros = BUDGET_MICROS
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD

    response = service.mutate_campaign_budgets(
        customer_id=CUSTOMER_ID, operations=[op]
    )
    budget_resource = response.results[0].resource_name
    print(f"✅ Budget created: {budget_resource}")
    return budget_resource


def create_campaign(client, budget_resource):
    """Create the campaign as PAUSED with UK targeting."""
    service = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    campaign = op.create
    campaign.name = CAMPAIGN_NAME
    campaign.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    campaign.status = client.enums.CampaignStatusEnum.PAUSED
    campaign.campaign_budget = budget_resource

    # Manual CPC to start — gives full control
    campaign.manual_cpc.enhanced_cpc_enabled = False

    # EU political advertising declaration (required for UK/EU)
    campaign.contains_eu_political_advertising = client.enums.EuPoliticalAdvertisingStatusEnum.DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING

    # Network settings — Search only
    campaign.network_settings.target_google_search = True
    campaign.network_settings.target_search_network = False
    campaign.network_settings.target_content_network = False

    response = service.mutate_campaigns(
        customer_id=CUSTOMER_ID, operations=[op]
    )
    campaign_resource = response.results[0].resource_name
    print(f"✅ Campaign created (PAUSED): {campaign_resource}")
    return campaign_resource


def set_location_targeting(client, campaign_resource):
    """Target United Kingdom."""
    service = client.get_service("CampaignCriterionService")
    geo_service = client.get_service("GeoTargetConstantService")

    op = client.get_type("CampaignCriterionOperation")
    criterion = op.create
    criterion.campaign = campaign_resource
    criterion.location.geo_target_constant = geo_service.geo_target_constant_path(UK_GEO_TARGET)

    response = service.mutate_campaign_criteria(
        customer_id=CUSTOMER_ID, operations=[op]
    )
    print(f"✅ Location targeting set: United Kingdom")
    return response.results[0].resource_name


def add_negative_keywords_campaign(client, campaign_resource):
    """Add campaign-level negative keywords."""
    negatives = [
        "free", "download", "github", "tutorial", "reddit",
        "documentation", "docs", "install", "npm",
    ]
    service = client.get_service("CampaignCriterionService")
    operations = []
    for kw in negatives:
        op = client.get_type("CampaignCriterionOperation")
        criterion = op.create
        criterion.campaign = campaign_resource
        criterion.negative = True
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        operations.append(op)

    response = service.mutate_campaign_criteria(
        customer_id=CUSTOMER_ID, operations=operations
    )
    print(f"✅ {len(response.results)} negative keywords added")


def create_ad_group(client, campaign_resource):
    """Create a single ad group."""
    service = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ad_group = op.create
    ad_group.name = AD_GROUP_NAME
    ad_group.campaign = campaign_resource
    ad_group.status = client.enums.AdGroupStatusEnum.ENABLED
    ad_group.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ad_group.cpc_bid_micros = 2_000_000  # £2 default max CPC

    response = service.mutate_ad_groups(
        customer_id=CUSTOMER_ID, operations=[op]
    )
    ad_group_resource = response.results[0].resource_name
    print(f"✅ Ad group created: {ad_group_resource}")
    return ad_group_resource


def add_keywords(client, ad_group_resource):
    """Add exact and phrase match keywords."""
    exact_keywords = [
        "openclaw consultant",
        "openclaw setup",
        "openclaw expert",
        "hire openclaw consultant",
        "openclaw for business",
        "openclaw automation",
    ]
    phrase_keywords = [
        "openclaw consultant",
        "openclaw setup service",
        "openclaw expert UK",
        "openclaw configuration",
        "openclaw ai consultant",
    ]

    service = client.get_service("AdGroupCriterionService")
    operations = []

    for kw in exact_keywords:
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ad_group_resource
        criterion.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
        operations.append(op)

    for kw in phrase_keywords:
        op = client.get_type("AdGroupCriterionOperation")
        criterion = op.create
        criterion.ad_group = ad_group_resource
        criterion.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.PHRASE
        operations.append(op)

    response = service.mutate_ad_group_criteria(
        customer_id=CUSTOMER_ID, operations=operations
    )
    print(f"✅ {len(response.results)} keywords added ({len(exact_keywords)} exact + {len(phrase_keywords)} phrase)")


def create_rsa(client, ad_group_resource, headlines, descriptions, final_url):
    """Create a Responsive Search Ad."""
    service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    ad_group_ad = op.create
    ad_group_ad.ad_group = ad_group_resource
    ad_group_ad.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ad = ad_group_ad.ad
    ad.final_urls.append(final_url)

    for h in headlines:
        headline = client.get_type("AdTextAsset")
        headline.text = h
        ad.responsive_search_ad.headlines.append(headline)

    for d in descriptions:
        desc = client.get_type("AdTextAsset")
        desc.text = d
        ad.responsive_search_ad.descriptions.append(desc)

    response = service.mutate_ad_group_ads(
        customer_id=CUSTOMER_ID, operations=[op]
    )
    print(f"✅ RSA created: {response.results[0].resource_name}")
    return response.results[0].resource_name


def create_sitelink_assets(client):
    """Create sitelink assets and return their resource names."""
    service = client.get_service("AssetService")

    sitelinks = [
        ("Free Consultation", f"{LANDING_URL}/#contact", "Book a free OpenClaw strategy call.", "No obligation, real advice."),
        ("Our Services", f"{LANDING_URL}/#services", "Setup, skills, automation & training.", "Full OpenClaw service suite."),
        ("About Phil", f"{LANDING_URL}/#about", "Daily OpenClaw user, 25+ skills built.", "Real production experience."),
        ("Pricing", f"{LANDING_URL}/#pricing", "Transparent pricing for all services.", "From setup to ongoing support."),
    ]

    operations = []
    for link_text, final_url, desc1, desc2 in sitelinks:
        op = client.get_type("AssetOperation")
        asset = op.create
        asset.name = f"OpenClaw Sitelink - {link_text}"
        asset.sitelink_asset.link_text = link_text
        asset.sitelink_asset.description1 = desc1
        asset.sitelink_asset.description2 = desc2
        asset.final_urls.append(final_url)
        operations.append(op)

    response = service.mutate_assets(
        customer_id=CUSTOMER_ID, operations=operations
    )
    resource_names = [r.resource_name for r in response.results]
    print(f"✅ {len(resource_names)} sitelink assets created")
    return resource_names


def link_sitelinks_to_campaign(client, campaign_resource, asset_resource_names):
    """Link sitelink assets to the campaign."""
    service = client.get_service("CampaignAssetService")
    operations = []

    for asset_rn in asset_resource_names:
        op = client.get_type("CampaignAssetOperation")
        campaign_asset = op.create
        campaign_asset.campaign = campaign_resource
        campaign_asset.asset = asset_rn
        campaign_asset.field_type = client.enums.AssetFieldTypeEnum.SITELINK
        operations.append(op)

    response = service.mutate_campaign_assets(
        customer_id=CUSTOMER_ID, operations=operations
    )
    print(f"✅ {len(response.results)} sitelinks linked to campaign")


def main():
    print("=" * 60)
    print("🚀 Creating OpenClaw Consultant Google Ads Campaign")
    print("=" * 60)

    client = get_client()

    # Safety: check it doesn't already exist
    print("\n🔍 Checking for existing campaign...")
    check_campaign_exists(client)

    # 1. Budget
    print("\n💰 Creating budget (£10/day)...")
    budget_resource = create_budget(client)

    # 2. Campaign (PAUSED)
    print("\n📢 Creating campaign (PAUSED)...")
    campaign_resource = create_campaign(client, budget_resource)

    # 3. Location targeting
    print("\n🇬🇧 Setting UK location targeting...")
    set_location_targeting(client, campaign_resource)

    # 4. Negative keywords
    print("\n🚫 Adding negative keywords...")
    add_negative_keywords_campaign(client, campaign_resource)

    # 5. Ad group
    print("\n📁 Creating ad group...")
    ad_group_resource = create_ad_group(client, campaign_resource)

    # 6. Keywords
    print("\n🎯 Adding keywords...")
    add_keywords(client, ad_group_resource)

    # 7. RSA 1 (headlines ≤30 chars, descriptions ≤90 chars)
    print("\n📝 Creating RSA 1...")
    create_rsa(
        client,
        ad_group_resource,
        headlines=[
            "UK's #1 OpenClaw Consultant",   # 27
            "Expert OpenClaw Setup",          # 21
            "Get OpenClaw Working For You",   # 28
            "Free OpenClaw Consultation",     # 26
            "25+ Custom Skills Built",        # 23
            "Production-Grade AI Agents",     # 27
        ],
        descriptions=[
            "Phil runs OpenClaw in production daily. 25+ custom skills, full automation. Free call.",  # 86
            "Expert OpenClaw setup, custom skill development & ongoing support. UK-based.",            # 76
        ],
        final_url=LANDING_URL,
    )

    # 8. RSA 2
    print("\n📝 Creating RSA 2...")
    create_rsa(
        client,
        ad_group_resource,
        headlines=[
            "OpenClaw Expert - Real Use",     # 25
            "AI Agent Automation - UK",       # 23
            "Custom OpenClaw Skills Built",   # 29
            "From Setup to Production",       # 24
            "Book a Free Strategy Call",      # 25
            "OpenClaw Done Right",            # 20
        ],
        descriptions=[
            "Not a tutorial reader - a daily OpenClaw user running a consultancy on it. Let's talk.",  # 88
            "Get OpenClaw configured properly first time. Custom skills, integrations & training.",    # 84
        ],
        final_url=LANDING_URL,
    )

    # 9. Sitelinks
    print("\n🔗 Creating sitelink assets...")
    sitelink_resources = create_sitelink_assets(client)
    link_sitelinks_to_campaign(client, campaign_resource, sitelink_resources)

    print("\n" + "=" * 60)
    print("✅ DONE — Campaign created as PAUSED")
    print(f"   Campaign: {CAMPAIGN_NAME}")
    print(f"   Budget: £10/day")
    print(f"   Keywords: 11 (6 exact + 5 phrase)")
    print(f"   Ads: 2 RSAs")
    print(f"   Sitelinks: 4")
    print(f"   Negatives: 9")
    print(f"   Landing: {LANDING_URL}")
    print("=" * 60)
    print("⚠️ Campaign is PAUSED — enable when ready to go live.")


if __name__ == "__main__":
    main()
