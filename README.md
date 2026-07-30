# Powerbuilding OS v10.2.1

React + Vite workout tracker with progression planning and workout-specific color themes.

## Version 10.2.1

- Fixed a Photos-tab cleanup crash that could cause a black screen after repeated navigation

- Removed smartwatch/health-file integration from the interface
- Removed daily recovery check-ins and readiness cards
- Workout mode now uses the selected day's color throughout the header, timer, exercise labels, completed sets, buttons, focus states, and cards
- Day 1 remains yellow, Day 2 orange, Day 4 blue, and Day 5 purple

## Existing features

- Next-workout rotation and weekly planner
- Previous session and best-ever sets
- Double-progression targets
- End-of-workout summary and next-session preview
- Workout history, metrics, progress photos, analytics, program builder, and backups

## Data compatibility

The app continues using `pb_tracker_v8` localStorage and `pb_tracker_photos_v1` IndexedDB storage. Existing workout history and settings remain compatible.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.