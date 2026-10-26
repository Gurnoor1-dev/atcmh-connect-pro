# ATCMH Connect Pro

A web application for the ATCMH Connect Pro project, using a Vite, React and TypeScript toolchain.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
git clone https://github.com/Gurnoor1-dev/atcmh-connect-pro.git
cd atcmh-connect-pro
npm install
npm run dev
```

Open the local URL printed by Vite. If the app needs API keys or service URLs, create a local `.env` file using the variable names referenced in the source. Do not commit secrets.

## Build and preview
```bash
npm run build
npm run preview
```

## Deploy from a terminal
```bash
npm install -g vercel
vercel
vercel --prod
```

## Deploy on Vercel
1. Import the GitHub repository into Vercel.
2. Select Vite as the framework preset.
3. Use `npm install` for installation and `npm run build` for building.
4. Use `dist` as the output directory if it is not detected automatically.
5. Add all required environment variables in Project Settings before deploying.

## Security
Never commit credentials, access tokens, or real environment files. Configure production secrets in Vercel's Environment Variables settings.