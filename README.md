# Powerbuilding OS v12.0.0

React + Vite training and nutrition tracker with optional Supabase accounts, cloud backup, and multi-device synchronization.

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

Upload the project contents to the repository root and retain .github/workflows/deploy.yml. No GitHub secret or environment variable is required because cloud project configuration is entered in Settings after deployment.
