#!/usr/bin/env python3
"""
Enable the "OpenClaw Consultant" Google Ads campaign (ID: 23637122613).
Account: 801-851-4760
⚠️ Only touches the specified campaign — no other campaigns are modified.

Env vars required (source ~/.zprofile):
  GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET,
  GOOGLE_ADS_REFRESH_TOKEN, GOOGLE_ADS_ACCOUNT_ID

Usage: source ~/.zprofile && python3 openclaw_ads_enable.py
Requires: pip install google-ads
"""

import os
from google.ads.googleads.client import GoogleAdsClient
from google.protobuf import field_mask_pb2

# Config
CAMPAIGN_ID = "23637122613"
CAMPAIGN_NAME = "OpenClaw Consultant"
CUSTOMER_ID = os.environ["GOOGLE_ADS_ACCOUNT_ID"].replace("-", "")


def main():
    print(f"🎯 Target: '{CAMPAIGN_NAME}' (ID: {CAMPAIGN_ID})")
    print(f"📊 Account: {os.environ['GOOGLE_ADS_ACCOUNT_ID']}")
    print()

    config = {
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    }
    client = GoogleAdsClient.load_from_dict(config)

    # Check current status
    ga_service = client.get_service("GoogleAdsService")
    query = f"SELECT campaign.id, campaign.name, campaign.status FROM campaign WHERE campaign.id = {CAMPAIGN_ID}"
    result = ga_service.search(customer_id=CUSTOMER_ID, query=query)

    campaign_row = None
    for row in result:
        campaign_row = row

    if not campaign_row:
        raise Exception(f"Campaign {CAMPAIGN_ID} not found")

    # Safety: verify campaign name
    if campaign_row.campaign.name != CAMPAIGN_NAME:
        raise Exception(
            f"⚠️ SAFETY STOP: Name mismatch! Expected '{CAMPAIGN_NAME}', "
            f"got '{campaign_row.campaign.name}'"
        )

    current_status = campaign_row.campaign.status.name
    print(f"📋 Current status: {current_status}")

    if current_status == "ENABLED":
        print("\n✅ Campaign is already ENABLED — no action needed.")
        return

    # Enable it
    print("\n🚀 Enabling campaign...")
    campaign_service = client.get_service("CampaignService")
    campaign_operation = client.get_type("CampaignOperation")

    campaign = campaign_operation.update
    campaign.resource_name = campaign_service.campaign_path(CUSTOMER_ID, CAMPAIGN_ID)
    campaign.status = client.enums.CampaignStatusEnum.ENABLED
    campaign_operation.update_mask = field_mask_pb2.FieldMask(paths=["status"])

    response = campaign_service.mutate_campaigns(
        customer_id=CUSTOMER_ID,
        operations=[campaign_operation],
    )
    print(f"✅ Updated: {response.results[0].resource_name}")

    # Verify
    result = ga_service.search(customer_id=CUSTOMER_ID, query=query)
    for row in result:
        final_status = row.campaign.status.name
        print(f"\n🔍 Verification: {row.campaign.name} is now {final_status}")
        if final_status == "ENABLED":
            print("🎉 Campaign is LIVE!")
        else:
            print(f"⚠️ Unexpected status: {final_status}")


if __name__ == "__main__":
    main()
