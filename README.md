# Powerbuilding OS v10.0

React + Vite workout tracker with data-preserving progression and planning.

## Version 10

- Automatically selects the next workout in the program rotation
- Shows the previous session, best-ever set, and today's target for every exercise
- Uses double progression: add reps until all sets reach the top of the range, then add the configured weight increment and restart at the bottom
- Includes a weekly calendar-style planner and next-session target list
- Shows an end-of-workout summary with time, volume, PRs, and the next workout preview
- Coach is intentionally omitted from the visible app for this release

## Data compatibility

The app continues to use the existing `pb_tracker_v8` localStorage key and retains migration support for v6/v5/v4/v3/v2 data. Progress photos remain in `pb_tracker_photos_v1` IndexedDB storage.

## Local development

```text
npm install
npm run dev
```

## GitHub Pages

Push the project to `main`, then set Settings -> Pages -> Source to GitHub Actions. The included workflow builds and deploys `dist`. The existing Vite base setting remains compatible with repository subpaths.