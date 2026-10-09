-- Quality guardrail: incomplete compositions must not appear as verified.
-- This migration only downgrades incomplete records to pending review; it does not guess ingredients.
update public.brands
set verified = false,
    verification_status = 'pending_review',
    last_verified = null,
    updated_at = now()
where nullif(trim(coalesce(active_ingredient, composition, '')), '') is null;

update public.medicines
set verification_status = 'pending_review',
    last_verified = null,
    updated_at = now()
where nullif(trim(coalesce(active_ingredient, salt, '')), '') is null;

update public.brand_medicines bm
set verification_status = 'pending_review',
    last_verified = null
where (
  exists (
    select 1 from public.brands b
    where b.id = bm.brand_id
      and nullif(trim(coalesce(b.active_ingredient, b.composition, '')), '') is null
  )
  or exists (
    select 1 from public.medicines m
    where m.id = bm.medicine_id
      and nullif(trim(coalesce(m.active_ingredient, m.salt, '')), '') is null
  )
);
