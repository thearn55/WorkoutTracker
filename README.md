# Powerbuilding OS v10.3.1

React + Vite workout tracker with progression planning, workout-specific color themes, and workout-plan PDF import.

## Version 10.3.1

- Rest timers now use an absolute end time, so elapsed time stays accurate when iOS suspends the app while Spotify or another app is open
- Rest timers immediately resynchronize when the app becomes visible or focused again
- PR trophies use an encoding-safe Unicode value to prevent garbled characters
- Added Import My Workout in Program Builder
- PDF imports show a complete preview before the current program is replaced
- Importing a program preserves workout history, body metrics, photos, settings, and backups
- Supports selectable-text PDFs with exercise rows such as Bench Press - 4 x 4-6
- Scanned/photo-only PDFs are not supported yet

## Existing features

- Next-workout rotation and weekly planner
- Previous session and best-ever sets
- Double-progression targets
- End-of-workout summary and next-session preview
- Workout history, metrics, progress photos, analytics, program builder, and backups
- Workout-specific colors throughout active sessions

## Data compatibility

The app continues using pb_tracker_v8 localStorage and pb_tracker_photos_v1 IndexedDB storage. Existing workout history and settings remain compatible.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.

The PDF reader is loaded securely over HTTPS only when Import My Workout is used. Normal workout tracking remains fully local.
