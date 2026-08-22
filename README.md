# Powerbuilding OS v12.1.0

React + Vite training and nutrition tracker with optional Supabase accounts, cloud backup, and multi-device synchronization.

## Version 12.1.0 - Barcode nutrition logging

- Scan UPC and EAN food barcodes with a phone camera
- Select a barcode photo when live camera scanning is unavailable
- Enter a barcode manually as a fallback
- Look up product names, serving sizes, calories, protein, carbohydrates, and fat through Open Food Facts
- Review and edit all returned nutrition values before adding the food
- Continue using the existing manual macro form for missing products

## Version 12.0.0 - Accounts and cloud sync

- Added optional email account creation and sign-in
- Added protected cloud snapshots through Supabase
- Added an explicit first-sync choice so existing local history is never overwritten automatically
- Added Keep This Device, Use Cloud Copy, Sync Now, and Restore Cloud controls
- Added opt-in automatic backup after local changes
- Added cloud checks when the app regains focus and every 60 seconds
- Added safe offline behavior; the app continues using local storage without a connection
- Added a disconnect/change-project control
- Added a complete Row Level Security SQL setup script
- Existing workout, nutrition, metrics, program, and settings data remain compatible
- Progress photos remain device-only in this release

## Required setup

Read CLOUD_SETUP.md and run supabase/setup.sql in a free Supabase project. The app asks for only the Project URL and Publishable key. Never use a secret or service_role key in the browser.

## Security model

The app_snapshots table has Row Level Security enabled. Authenticated users can select, insert, update, and delete only the row whose user_id matches their own authenticated account. Anonymous access is revoked.

## Data compatibility

The app continues using pb_tracker_v8 localStorage and pb_tracker_photos_v1 IndexedDB. Cloud sync is optional and does not change local operation. Full JSON export/import remains available as a second backup method.

## GitHub Pages

Upload the project contents to the repository root and retain `.github/workflows/deploy.yml`.

Before deploying cloud sync for new devices, add these GitHub repository secrets under **Settings -> Secrets and variables -> Actions**:

- `SUPABASE_URL` — the Supabase Project URL
- `SUPABASE_PUBLISHABLE_KEY` — the Supabase Publishable key

The deployment workflow embeds these public connection values in the built app. Users never need to enter them in Settings; they only create an account or sign in. Existing devices can temporarily fall back to the previously saved local cloud configuration.
