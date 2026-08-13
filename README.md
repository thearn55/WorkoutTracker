# Powerbuilding OS v11.1.0

React + Vite training and nutrition tracker with progression planning, workout-specific color themes, workout-plan PDF import, and searchable food logging.

## Version 11.1.0 - Searchable Food Library

- Added a built-in library of common whole foods that works offline
- Added online name and brand search for packaged foods through Open Food Facts
- Food selections automatically fill calories, protein, carbohydrates, fat, and serving description
- Serving multipliers recalculate the logged totals before the food is added
- Added recently used foods for faster repeat logging
- Retained saved foods, manual entry, Copy Yesterday, water tracking, targets, and daily history
- Added clear offline and no-results states
- Added source attribution and an accuracy reminder for community-supplied food data
- Recent foods are included in the existing full JSON backup

## Data compatibility

The app continues using pb_tracker_v8 localStorage and pb_tracker_photos_v1 IndexedDB storage. Existing workout history, nutrition history, settings, programs, and photos remain compatible.

## Food-data notes

The built-in common-food values are practical estimates and can vary by preparation and portion. Packaged-food results are supplied by Open Food Facts under the Open Database License. Check the product label when exact values matter. Online packaged-food search requires an internet connection; built-in, saved, recent, and manual foods continue working without it.

## GitHub Pages

Upload the project contents to the repository root and keep Pages set to GitHub Actions. The included workflow builds and deploys the app.
