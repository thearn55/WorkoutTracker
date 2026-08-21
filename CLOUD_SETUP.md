# Version 12 cloud setup

Complete these steps once. Your existing app remains usable while cloud sync is unconfigured.

## 1. Create the project

1. Go to https://supabase.com and create a free project.
2. Save the database password somewhere private. The workout app never needs this password.

## 2. Create the protected data table

1. In the Supabase dashboard, open SQL Editor.
2. Choose New query.
3. Open supabase/setup.sql from this project.
4. Paste the entire script and select Run.

The script enables Row Level Security. Each signed-in account can read and change only its own snapshot.

## 3. Configure email authentication

1. Open Authentication -> Providers.
2. Leave Email enabled.
3. Open Authentication -> URL Configuration.
4. Set Site URL to the exact GitHub Pages address:
   https://thearn55.github.io/WorkoutTracker/
5. Add the same exact address under Redirect URLs.

## 4. Connect the app

1. Open Project Settings -> Data API (or API Keys in newer dashboard layouts).
2. Copy the Project URL.
3. Copy the Publishable key. A legacy anon key also works.
4. In Powerbuilding OS, open Settings -> Account & Cloud Sync.
5. Paste the Project URL and Publishable key, then save.
6. Create an account and confirm the email message.
7. Sign in.
8. On the first sync, choose:
   - Keep This Device: upload the history currently on this phone.
   - Use Cloud Copy: replace this device with an existing cloud backup.
9. Enable automatic sync after confirming the correct starting copy.

Never paste the service_role or secret key into the app. Only the Publishable key belongs in a browser app.

## What syncs

- Workout history and set logs
- Program and workout-day settings
- Body metrics
- Nutrition entries and targets
- App preferences and strength goals

Progress photos remain device-only in Version 12.0.
