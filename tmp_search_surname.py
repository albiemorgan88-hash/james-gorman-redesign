import requests,re,sys
queries=[('regenthouse.org.uk','Collins'),('glenlolacollegiate.net','Donnan'),('methody.org','McCluggage'),('methody.org','Cooney'),('downhighschool.org.uk','Hamilton')]
headers={'User-Agent':'Mozilla/5.0'}
for domain,surname in queries:
    print(f'\n## {domain} {surname}')
    found=False
    for sm in [f'https://www.{domain}/sitemap.xml', f'https://{domain}/sitemap.xml']:
        try:
            x=requests.get(sm,headers=headers,timeout=15)
            if x.status_code==200 and 'xml' in x.headers.get('content-type',''):
                print('sitemap',sm)
                urls=re.findall(r'<loc>(.*?)</loc>',x.text)
                for u in urls[:300]:
                    try:
                        t=requests.get(u,headers=headers,timeout=10).text
                    except Exception:
                        continue
                    if surname.lower() in t.lower():
                        print('found',u)
                        txt=' '.join(re.sub(r'<[^>]+>',' ',t).split())
                        i=txt.lower().find(surname.lower())
                        print(txt[max(0,i-150):i+250])
                        found=True
                        break
        except Exception:
            pass
        if found:
            break
    if not found:
        print('no match')
