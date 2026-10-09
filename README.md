# MediVault India

Educational medicine and pharmacology reference for learning and lookup. This project is hosted on **GitHub Pages** and uses Supabase for its public reference database.

## Hosting

- Production website: https://thestylehubindia.github.io/Medicine-/
- GitHub Pages deployment workflow: `.github/workflows/deploy-pages.yml`
- Workflow: https://github.com/TheStyleHubIndia/Medicine-/actions
- Database project: Supabase project `fgsmqccesuxxhitosztc`

**Vercel is not part of the intended deployment path.** The repository's production workflow builds and deploys to GitHub Pages. No Vercel configuration file was found in the repository at the time of this update. The Vercel project/account itself must be deleted or disconnected from the Vercel dashboard by an account owner; removing repository files cannot delete an external hosting project.

## Local development

Requirements: Node.js 22+ and npm.

```sh
npm install
npm run typecheck
npm run build
```

For GitHub Pages, use the repository workflow and `vite.config.pages.ts`; the deployed app is served under the `/Medicine-/` path.

## Medicine data verification

- `verified` should only be used when the exact ingredient/composition and relevant product details are backed by a reliable reference.
- Records awaiting source review must remain `under_review`.
- Brand products can be combinations of several ingredients; a single generic link may be insufficient.
- Never infer composition from a brand name alone.
- Do not treat this educational app as a prescribing tool or substitute for a doctor/pharmacist.

The migration `supabase/migrations/20261009120000_medicine_data_quality_audit.sql` adds a read-only quality-audit view. Apply migrations through the project's approved Supabase migration process before querying that view. It reports missing fields and pending review counts; it does not automatically verify or alter medicine records.
