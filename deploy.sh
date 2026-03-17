#!/bin/bash
# Deploy Tend landing page to tend.team

set -e

cd "$(dirname "$0")"

echo "📦 Committing changes..."
git add landing-page/
git commit -m "${1:-Update landing page}" || echo "Nothing to commit"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "🌐 Deploying to Vercel..."
cd landing-page
vercel --prod --yes

echo "✅ Done! Live at https://tend.team"
