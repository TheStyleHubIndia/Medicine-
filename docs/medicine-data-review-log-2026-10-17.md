# Medicine Data Review Log — 2026-10-17

Repository: `TheStyleHubIndia/Medicine-`
Supabase project: `fgsmqccesuxxhitosztc`

## Live database snapshot

Counts checked after the latest batch:

| Verification status | Count |
|---|---:|
| `pending_review` | 623 |
| `under_review` | 89 |
| `verified` | 125 |
| **Total** | **837** |

These are a point-in-time snapshot, not a static source of truth. The live medicine records and verification statuses are stored in Supabase.

## Latest medicine records updated in Supabase

The following records had clinical fields updated and official product/regulatory references linked. They remain `under_review`; adding references or filling fields alone does not establish full verification.

- **Amifostine** — indication-specific use, hypotension and hypersensitivity precautions. Reference: [DailyMed ETHYOL label](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a17563f2-d231-4385-bc94-0217be78b89d).
- **Aminocaproic acid** — antifibrinolytic indication and clotting/DIC-related precautions. Reference: [DailyMed aminocaproic acid label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b8f0ddb-00fd-4c22-afae-afe636f95f3a).
- **Aminophylline** — indication, contraindication and narrow-therapeutic-range/toxicity warnings. Reference: [DailyMed aminophylline injection label](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9a663ef3-881f-48bd-2689-3713b24545c2).
- **Amisulpride** — QT/cardiac risk, prolactin effects and renal-impairment precautions. Reference: [eMC product information](https://www.medicines.org.uk/emc/product/4495/smpc).
- **Amorolfine** — formulation-specific topical nail-lacquer indication and safety warnings. Reference: [eMC product information](https://www.medicines.org.uk/emc/product/7413/smpc).
- **Amoxapine** — depression indication, MAOI contraindication and antidepressant safety warnings. Reference: [DailyMed amoxapine label](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a16297df-3158-48db-85e5-5cd506885556&version=20).

## Audit notes

- Latest audit found no missing core fields among the 89 `under_review` records for the checked set of indications, contraindications, warnings, common/serious adverse effects, strengths, dosage forms and routes.
- Eight `under_review` records had fewer than three linked references; source quality and product-specific applicability still need review.
- No `under_review` record was automatically promoted to `verified`.
- This documentation commit does not modify app UI, application source, Supabase credentials, or migration files.
- This log does not replace a fresh live Supabase audit; the counts can change as work continues.
