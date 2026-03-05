import asyncio
from cdp import CdpClient

async def main():
    async with CdpClient(
        api_key_id="2dde16bc-065b-4555-8bfd-2866e6c662dd",
        api_key_secret="h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
        wallet_secret="oGdiU85BNCqG0PlF9PeJ5pU32jjwQMiB",
    ) as cdp:
        accounts = await cdp.evm.list_accounts()
        print("Accounts:", accounts)

        account = await cdp.evm.get_or_create_account(name="albie-bluecanvas")
        print("Account:", account.address)

        try:
            exported = await cdp.evm.export_account(address=account.address)
            print("Exported:", exported)
        except Exception as e:
            print(f"Export error: {e}")

loop = asyncio.new_event_loop()
loop.run_until_complete(main())
