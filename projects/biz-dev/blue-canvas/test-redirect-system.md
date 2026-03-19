# Test Redirect System

## Professional URL Tests

Test these URLs to ensure company-based routing works:

### Company Slug URLs (NEW)
✅ https://audit.bluecanvas.ai/mcaleerjackson
✅ https://audit.bluecanvas.ai/asmchartered  
✅ https://audit.bluecanvas.ai/gmcg
✅ https://audit.bluecanvas.ai/claremount
✅ https://audit.bluecanvas.ai/pgm
✅ https://audit.bluecanvas.ai/dnt

### Email Parameter URLs (FALLBACK)
✅ https://audit.bluecanvas.ai/?ref=oonagh.arg@mcaleerjackson.co.uk
✅ https://audit.bluecanvas.ai/?ref=ian.fin@asm.co.uk
✅ https://audit.bluecanvas.ai/?email=michael.gin@gmcg.co.uk

### Expected Behaviors:

1. **Company slug in path** → Redirects to company-specific showcase
2. **Email parameter** → Maps email to company slug, then redirects 
3. **Unknown slug/email** → Redirects to default showcase
4. **No parameters** → Redirects to default showcase

### Showcase Destinations:

- mcaleerjackson → https://albiemorgan88-hash.github.io/mcaleerjackson-audit/
- asmchartered → https://albiemorgan88-hash.github.io/asm-opportunities/
- gmcg → https://albiemorgan88-hash.github.io/gmcg-audit/
- claremount → https://albiemorgan88-hash.github.io/claremount-digital-audit/

## Manual Test Checklist:

- [ ] Company slug URLs redirect correctly
- [ ] Email parameter URLs redirect correctly  
- [ ] Unknown company slugs redirect to default
- [ ] Unknown emails redirect to default
- [ ] SSL certificate is active for audit.bluecanvas.ai
- [ ] No broken links or 404 errors
- [ ] Loading animation displays for 1.5 seconds
- [ ] Analytics tracking fires (check GitHub issues)

## Apollo Integration Test:

Create a test sequence in Apollo with:
```
https://audit.bluecanvas.ai/{{company_slug}}
```

And verify it generates professional URLs like:
- https://audit.bluecanvas.ai/mcaleerjackson
- https://audit.bluecanvas.ai/asmchartered

**All tests passing = Ready for production use!**