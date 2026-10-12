# Medicine data verification — next batch

## Status
- GitHub Pages deployment workflow is passing.
- The BLUGLIP Tablets source-backed migration is committed, but is **not confirmed applied to the live Supabase database**.
- Do not mark brand variants verified solely because their names are similar.

## Verified official-source candidates for review
Use the manufacturer's product-specific label/price list and match brand, strength, and dosage form before editing an individual row.

1. BLUGLIP Tablets — vildagliptin 50 mg per uncoated tablet.
   Official prescribing information: https://www.bluecrosslabs.com/wp-content/uploads/2024/10/BLUGLIP-Tablets.pdf
2. BLUGLIP-M and BLUGLIP-M Forte — separate combination products; do not reuse the BLUGLIP-only composition.
3. BLUMOX-CA — formulation varies by presentation. Manufacturer's April 2025 price list identifies, among others, 625 mg tablets (amoxicillin 500 mg + clavulanic acid 125 mg), dry syrup 200 mg + 28.5 mg per 5 ml, and injection 1 g + 200 mg. Match exact dosage form and strength.
4. EXTACEF-200 DT — cefixime 200 mg; verify against exact product entry before updating.
5. BLUGLIP-M — vildagliptin 50 mg + metformin 500 mg; confirm the exact variant.
6. BLUGLIP-M Forte — vildagliptin 50 mg + metformin 1000 mg; confirm the exact variant.

Manufacturer references:
- Product catalogue: https://www.bluecrosslabs.com/products/
- Official April 2025 price list: https://www.bluecrosslabs.com/wp-content/uploads/2025/06/Pricelist-APR2025.pdf

## Safety rules
- Keep unmatched, incomplete, or ambiguous rows pending review.
- Do not infer strength, dosage form, or combination ingredients from a brand name alone.
- Do not change a database row until its unique product presentation is identified.
- GitHub Actions deploying successfully does not mean Supabase SQL ran. Check the Supabase migration history after applying any migration.
