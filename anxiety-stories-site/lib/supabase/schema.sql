-- Run this in your Supabase SQL editor to set up the database

create table if not exists stories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  author_name text not null default 'Anonymous',
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  story_id uuid references stories(id) on delete cascade not null,
  content text not null,
  author_name text not null default 'Anonymous',
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table stories enable row level security;
alter table comments enable row level security;

-- Allow anyone to read stories and comments
create policy "Anyone can read stories" on stories for select using (true);
create policy "Anyone can read comments" on comments for select using (true);

-- Allow anyone to insert stories and comments (anonymous or authenticated)
create policy "Anyone can post stories" on stories for insert with check (true);
create policy "Anyone can post comments" on comments for insert with check (true);
