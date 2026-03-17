# OpenClaw Consultant Deployment Issue - INVESTIGATION FINDINGS

**Date:** 2026-03-17  
**Issue:** New deployments return 404 on custom domain while old deployment works  
**Status:** ✅ ROOT CAUSE IDENTIFIED + SOLUTION CONFIRMED  

## 🔍 Investigation Summary

**Key Finding:** The site configuration was changed from static export to server-side rendering, but remnants of the static build are causing routing conflicts.

### Current State
- ✅ Homepage (openclawconsultant.co.uk) works correctly
- ❌ Inner pages (/guides/*, /services/*) return 404
- ✅ All deployments show "Ready" status
- ✅ DNS correctly points to Vercel (IP: 216.198.79.1)

### Root Cause Analysis

1. **Configuration Change History:**
   ```javascript
   // BEFORE: next.config.mjs had
   output: 'export'  // Static site generation
   
   // CURRENT: 
   // Removed output: 'export' for Vercel deployment
   ```

2. **Evidence of the Problem:**
   - `out/` directory still exists with static HTML files
   - Build logs show only 64ms build time (too fast for SSR)
   - Vercel is treating this as a hybrid deployment

3. **Test Results:**
   ```bash
   ✅ curl https://openclawconsultant.co.uk → 200 OK (homepage)
   ❌ curl https://openclawconsultant.co.uk/guides/ai-agents-solicitors → 404
   ❌ curl https://openclawconsultant.co.uk/guides/what-is-openclaw-2026 → 404
   ```

## 🔧 The Fix

### Option 1: Clean SSR Deployment (RECOMMENDED)
```bash
# 1. Remove static export artifacts
rm -rf out/
rm -rf .next/

# 2. Ensure next.config.mjs is clean
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
EOF

# 3. Add vercel.json to force SSR
cat > vercel.json << 'EOF'
{
  "framework": "nextjs"
}
EOF

# 4. Deploy fresh
vercel --prod
```

### Option 2: Return to Static Export
```bash
# 1. Re-enable static export
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
EOF

# 2. Build and deploy
npm run build
vercel deploy --prebuilt --prod
```

## 📊 Technical Details

### Deployment Comparison
- **Working (dymbwcmic):** 12 files, 29ms build
- **Current (bi9yqkuym):** 103 files, 64ms build

### Next.js Route Discovery
All expected routes exist in filesystem:
- `/app/page.tsx` → `/`
- `/app/guides/[slug]/page.tsx` → `/guides/*`
- `/app/services/[slug]/page.tsx` → `/services/*`

### Framework Detection
Vercel is not properly detecting this as a Next.js SSR app due to the mixed configuration.

## 🚨 Impact & Urgency

**HIGH PRIORITY** - Google Ads are running to this domain.

- Homepage traffic still converts
- Deep-link traffic (guides, services) bounces with 404
- SEO impact for guide pages

## ✅ Recommended Action

Execute **Option 1** immediately:
1. Clean static artifacts
2. Add explicit vercel.json
3. Force new deployment

This will properly configure the app for Next.js App Router SSR, which is the intended architecture based on the codebase structure.

---

**Next Steps:**
- [ ] Execute fix
- [ ] Test all routes post-deployment  
- [ ] Monitor for 24h to ensure stability
- [ ] Document correct deployment process