# CysertHQ Ready Project

This is a ready-to-run Next.js 14 (App Router) project for CysertHQ.

## Quick start

1. Extract the zip
2. Recommended: use `npm ci` to install exact versions from package-lock.json:

```bash
npm ci
```

If `npm ci` fails (older npm), run:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

4. Open http://localhost:3000

## Notes
- Contact form submissions are saved to `data/submissions.json` for testing.
- If you need email delivery, I can wire Resend/SendGrid next.
