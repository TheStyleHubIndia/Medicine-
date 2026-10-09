-- Read-only quality audit for medicine reference data.
-- This view intentionally does not mark any record verified.
create or replace view public.medicine_data_quality_audit as
select
  'medicines'::text as record_type,
  count(*)::bigint as total_records,
  count(*) filter (where verification_status = 'under_review')::bigint as pending_review,
  count(*) filter (
    where coalesce(nullif(trim(generic_name), ''), nullif(trim(display_name), '')) is null
  )::bigint as missing_name,
  count(*) filter (
    where coalesce(nullif(trim(salt), ''), nullif(trim(active_ingredient), '')) is null
  )::bigint as missing_ingredient,
  count(*) filter (where verification_status = 'verified' and
    coalesce(nullif(trim(salt), ''), nullif(trim(active_ingredient), '')) is null
  )::bigint as verified_but_missing_ingredient
from public.medicines
union all
select
  'brands',
  count(*)::bigint,
  count(*) filter (where verification_status = 'under_review')::bigint,
  count(*) filter (where nullif(trim(brand_name), '') is null)::bigint,
  count(*) filter (where coalesce(nullif(trim(composition), ''), nullif(trim(active_ingredient), '')) is null)::bigint,
  count(*) filter (where verification_status = 'verified' and
    coalesce(nullif(trim(composition), ''), nullif(trim(active_ingredient), '')) is null
  )::bigint
from public.brands
union all
select
  'manufacturers',
  count(*)::bigint,
  count(*) filter (where verification_status = 'under_review')::bigint,
  count(*) filter (where nullif(trim(name), '') is null)::bigint,
  count(*) filter (where nullif(trim(country), '') is null)::bigint,
  count(*) filter (where verification_status = 'verified' and nullif(trim(name), '') is null)::bigint
from public.manufacturers;

grant select on public.medicine_data_quality_audit to anon, authenticated;
