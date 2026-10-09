-- Brand-to-generic junction table.
-- Supports combination brands without inventing synthetic medicine records.
create table if not exists public.brand_medicines (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.brands(id) on delete cascade,
  medicine_id uuid not null references public.medicines(id) on delete restrict,
  ingredient_order integer not null default 1 check (ingredient_order > 0),
  verification_status text not null default 'under_review'
    check (verification_status in ('verified', 'under_review', 'rejected')),
  source text,
  last_verified date,
  created_at timestamptz not null default now(),
  unique (brand_id, medicine_id)
);

create index if not exists brand_medicines_brand_id_idx
  on public.brand_medicines(brand_id);
create index if not exists brand_medicines_medicine_id_idx
  on public.brand_medicines(medicine_id);

alter table public.brand_medicines enable row level security;

drop policy if exists "Public can read brand medicine mappings" on public.brand_medicines;
create policy "Public can read brand medicine mappings"
  on public.brand_medicines for select to anon, authenticated using (true);

grant select on public.brand_medicines to anon, authenticated;

-- Backfill only links that already exist in brands.medicine_id.
-- Keep their current verification status; never upgrade pending links automatically.
insert into public.brand_medicines
  (brand_id, medicine_id, verification_status, source)
select
  b.id,
  b.medicine_id,
  case when b.verification_status = 'verified' then 'verified' else 'under_review' end,
  coalesce(b.source, 'Migrated from existing brand medicine link')
from public.brands b
where b.medicine_id is not null
on conflict (brand_id, medicine_id) do nothing;
