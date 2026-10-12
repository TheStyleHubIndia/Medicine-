-- Source-backed, product-specific correction from Blue Cross official prescribing information.
-- BLUGLIP Tablets only; do not apply this composition to BLUGLIP-M or BLUGLIP-M FORTE.
-- Source: https://www.bluecrosslabs.com/wp-content/uploads/2024/10/BLUGLIP-Tablets.pdf
-- Fail closed: only update when exactly one BLUGLIP row exists and its known form/strength do not conflict.
-- If multiple rows or variant ambiguity exists, leave records pending for manual review.
update public.brands
set composition = 'Vildagliptin 50 mg per uncoated tablet',
    active_ingredient = 'Vildagliptin',
    strength = '50 mg',
    dosage_form = 'Uncoated tablet',
    source = 'Blue Cross official prescribing information: https://www.bluecrosslabs.com/wp-content/uploads/2024/10/BLUGLIP-Tablets.pdf',
    verification_status = 'verified',
    verified = true,
    last_verified = current_date,
    updated_at = now()
where upper(trim(brand_name)) = 'BLUGLIP'
  and (select count(*) from public.brands b where upper(trim(b.brand_name)) = 'BLUGLIP') = 1
  and coalesce(upper(trim(dosage_form)), '') in ('', 'TABLET', 'TABLETS', 'UNCOATED TABLET')
  and coalesce(lower(trim(strength)), '') in ('', '50 mg', '50mg');
