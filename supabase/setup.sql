-- Powerbuilding OS v12 cloud snapshot table
-- Run this entire script once in Supabase: SQL Editor -> New query -> Run.

create table if not exists public.app_snapshots (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.app_snapshots enable row level security;

drop policy if exists "Users can read their own snapshot" on public.app_snapshots;
create policy "Users can read their own snapshot"
on public.app_snapshots
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own snapshot" on public.app_snapshots;
create policy "Users can create their own snapshot"
on public.app_snapshots
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own snapshot" on public.app_snapshots;
create policy "Users can update their own snapshot"
on public.app_snapshots
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own snapshot" on public.app_snapshots;
create policy "Users can delete their own snapshot"
on public.app_snapshots
for delete
to authenticated
using ((select auth.uid()) = user_id);

grant select, insert, update, delete on table public.app_snapshots to authenticated;
revoke all on table public.app_snapshots from anon;
