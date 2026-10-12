-- Source-backed, product-specific correction from Blue Cross official prescribing information.
-- BLUGLIP Tablets only; do not apply this composition to BLUGLIP-M or BLUGLIP-M FORTE.
-- Source: https://www.bluecrosslabs.com/wp-content/uploads/2024/10/BLUGLIP-Tablets.pdf
-- If the brand row represents a different formulation, leave it pending and resolve manually.
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
  and (
    coalesce(upper(trim(dosage_form)), '') in ('', 'TABLET', 'TABLETS', 'UNCOATED TABLET')
    or coalesce(trim(strength), '') in ('', '50 mg', '50mg')
  )
  and not exists (
    select 1 from public.brands other
    where upper(trim(other.brand_name)) = 'BLUGLIP'
      and (
        coalesce(upper(trim(other.dosage_form)), '') not in ('', 'TABLET', 'TABLETS', 'UNCOATED TABLET')
        or coalesce(trim(other.strength), '') not in ('', '50 mg', '50mg')
      )
  );
