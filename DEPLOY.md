# Tend Website Deploy Guide

## Quick Deploy (Anyone)
```bash
cd ~/clawd/projects/tend/getrook-tend/landing-page
vercel --prod --yes
```

## Full Workflow
1. **Edit** `landing-page/index.html`
2. **Commit & Push**
   ```bash
   cd ~/clawd/projects/tend/getrook-tend
   git add landing-page/
   git commit -m "Update landing page"
   git push origin main
   ```
3. **Deploy**
   ```bash
   cd landing-page && vercel --prod --yes
   ```

## URLs
- **Live site:** https://tend.team
- **GitHub repo:** https://github.com/getrook/tend
- **Vercel project:** jony-9419s-projects/tend

## File Structure
```
getrook/tend/
├── landing-page/     ← Website code (deploys to tend.team)
│   ├── index.html
│   ├── og-image.png
│   └── ...
├── marketing/        ← GTM plans, ad assets
├── internal/         ← SOPs, scripts, battle cards
├── public/           ← Case studies, outreach sequences
└── strategy/         ← Business docs, alignment
```

## Future: Auto-Deploy
Once GitHub browser access is restored, connect getrook/tend repo to Vercel for auto-deploys on push.
