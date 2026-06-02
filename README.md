# Matrix Mech Co Website

This is a simple Next.js website for Matrix Mech Co.

## What is included
- Residential, commercial, and industrial service sections
- CRM-ready buttons for Housecall Pro or Jobber
- Contact section with matrixmechco.com
- Clean layout that deploys well on Vercel

## Run locally
1. Install Node.js 18+
2. Open this folder in a terminal
3. Run:

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Upload to GitHub
1. Create a new GitHub repository called `matrixmechco-site`
2. Upload all files from this folder into the repo
3. Commit the upload

## Deploy to Vercel
1. Log into Vercel
2. Click **Add New → Project**
3. Import the `matrixmechco-site` GitHub repo
4. Click **Deploy**
5. After deploy, go to **Project → Settings → Domains**
6. Add `matrixmechco.com`
7. Copy the DNS records Vercel gives you into your domain registrar

## Easy edits
- Main page content: `app/page.tsx`
- Site styling: `app/globals.css`
- SEO title/description: `app/layout.tsx`
