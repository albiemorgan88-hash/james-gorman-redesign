#!/bin/bash

# Wall Group Website Deployment Script
echo "🏪 Deploying The Wall Group Website..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "🌐 Your Wall Group website is now live!"
    echo "💼 This is a statement piece - Gavan Wall will be impressed."
    echo ""
    echo "📧 Don't forget to update:"
    echo "   - Favicon (public/favicon.ico)"
    echo "   - Social media links in Footer.tsx"
    echo "   - Contact form backend integration"
    echo "   - Google Maps integration"
    echo ""
    echo "#BackinNorthBelfast #BackinWestBelfast"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi