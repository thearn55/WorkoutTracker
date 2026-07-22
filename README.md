# Powerbuilding OS v8

A Vite + React conversion of the single-file tracker.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

Push this project to the `main` branch, then set **Settings → Pages → Source** to **GitHub Actions**. The included workflow builds and deploys `dist`.

`base: "./"` in `vite.config.js` supports both user sites and repository subpaths.

## Data migration

The app reads v6/v5/v4/v3/v2 localStorage data and saves the migrated structure under `pb_tracker_v8`. Progress photos are stored separately in IndexedDB on the current device.

## Optional external AI coach

Settings includes an optional secure coach endpoint. The browser sends `{ question, context }` and expects JSON containing `answer` or `message`. Keep provider API keys on that server; never place them in client-side React code.
