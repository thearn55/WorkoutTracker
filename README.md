# Powerbuilding OS v11.0.0

React + Vite training and nutrition tracker with progression planning, workout-specific color themes, and workout-plan PDF import.

## Version 11.0.0 - Nutrition

- Added a dedicated Food tab and daily nutrition dashboard
- Added editable calorie, protein, carbohydrate, fat, and water targets
- Added food logging by breakfast, lunch, dinner, or snack
- Added serving multipliers with automatic calorie and macro totals
- Added reusable saved foods for fast entry
- Added Copy Yesterday for repeated meals
- Added daily water tracking
- Added recent-day nutrition history with date navigation
- Added nutrition data to the existing full JSON backup
- Corrected local-day handling so evening entries use the phone's calendar date instead of UTC

## Existing training features

- Next-workout rotation and weekly planner
- Previous session and best-ever sets
- Double-progression targets
- Background-safe rest timer
- End-of-workout summary and next-session preview
- Workout history, body metrics, progress photos, analytics, program builder, and backups
- Workout-plan PDF import with iPhone Safari compatibility
- Workout-specific colors throughout active sessions

## Data compatibility

The app continues using pb_tracker_v8 localStorage and pb_tracker_photos_v1 IndexedDB storage. Existing workout history, settings, imported programs, and photos remain compatible. Nutrition entries are stored inside the main app data and included in full JSON backups.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.
