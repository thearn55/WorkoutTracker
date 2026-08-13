# Powerbuilding OS v11.2.0

React + Vite training and nutrition tracker with progression planning, editable workout schedules, workout-plan PDF import, and manual macro logging.

## Version 11.2.0

- Added controls to add, delete, and reorder complete workout days
- Added an editable planned weekday for every workout
- Weekly planner now follows the saved workout weekdays and program order
- Added Add Set during active workouts
- Added Remove Last Set for accidental additions
- Extra session sets are saved in history but do not permanently alter the programmed set count
- Strength-dashboard 1RM values now combine all named variations of the same lift
- Squat includes high-bar, low-bar, back, front, and other exercise names containing Squat
- Bench, deadlift, and overhead-press variations are grouped using the same principle
- Exercise-specific progression remains separate, so one variation does not change another variation's next-session recommendation
- Removed built-in and online food-library search
- Retained manual macro entry, saved foods, Copy Yesterday, water, targets, and nutrition history
- Removed the single-letter symbols from the bottom navigation and enlarged the text labels

## Data compatibility

The app continues using pb_tracker_v8 localStorage and pb_tracker_photos_v1 IndexedDB storage. Existing workout history, programs, nutrition entries, saved foods, settings, and photos remain compatible. Previously cached recent food-library items remain harmless in storage but are no longer displayed.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.
