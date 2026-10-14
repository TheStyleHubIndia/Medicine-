# Medicine Label Verification Progress

Last updated: 2026-10-15

## Scope and safety

This is a tracking document only. It does not change the app UI, medicine clinical fields, verification statuses, or database migrations.

A DailyMed result is a source candidate, not proof that every clinical field in the app is correct. Keep a medicine in `under_review` until the exact ingredient and relevant product details (strength, dosage form, route, and label context where applicable) have been checked against the source. Do not automatically promote records to `verified`.

## Current database snapshot

- Total medicine records: 837
- `verified`: 92
- `under_review`: 72
- The 72 under-review records have not been promoted to verified by this work.
- Three additional product-label references were inserted into `public.references` and linked to their matching medicine records in `public.medicine_references`.

## Label-source candidates added

| Generic name | Source | Link | Current interpretation |
|---|---|---|---|
| Aceclofenac | DailyMed — CLANZA CR (aceclofenac) tablet label | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8a023942-01e8-4849-aa3c-1a640ffc7fd3 | Ingredient/title candidate only; review the actual label and product details before verification. |
| Albendazole | DailyMed — ALBENZA (albendazole) tablet label | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1977a867-0ee1-44c0-8da3-fe59c48699f5 | Ingredient/title candidate only; review the actual label and product details before verification. |
| Allopurinol | DailyMed — allopurinol tablet label (Indoco Remedies Limited) | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=48a9a6c3-4604-421e-a323-1133888aaf76 | Ingredient/title candidate only; review the actual label and product details before verification. |

## Remaining work

1. Open and review each source label, checking that the ingredient matches the medicine record.
2. Verify relevant product details and reconcile any differences before changing clinical data.
3. Keep ambiguous or unsupported records in `under_review`.
4. Record the source and verification date only after a human-quality source match is completed.
5. Re-check the database counts after each reviewed batch.

## Explicit non-claims

- The 72 under-review records are **not** fully verified.
- Adding a reference URL does **not** mean the clinical record is verified.
- This document does not assert that the current app deployment has completed.
