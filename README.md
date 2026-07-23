# Powerbuilding OS v10.1

React + Vite workout tracker with progression planning and on-device smartwatch health imports.

## Smartwatch and health data

- Apple Health: import the `export.xml` file
- Garmin and compatible platforms: import CSV or JSON
- Supported metrics: sleep duration, steps, and resting heart rate
- Watch sleep contributes to readiness when a newer manual recovery check-in is unavailable
- Health exports are processed locally and are not uploaded

Direct background synchronization is not available to a GitHub Pages browser app. Live account sync would require a secure backend or a native iPhone/Android wrapper.

## Version 10 progression

- Next-workout rotation and weekly planner
- Previous session and best-ever sets
- Double-progression targets
- End-of-workout summary and next-session preview
- Coach remains omitted from the visible app

## Data compatibility

The app continues using `pb_tracker_v8` localStorage and `pb_tracker_photos_v1` IndexedDB storage. Existing workout history, metrics, settings, and photos remain compatible.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.