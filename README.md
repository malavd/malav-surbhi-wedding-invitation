# Malav & Surbhi wedding invitation

A mobile-first Next.js App Router wedding invitation, built with TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository and push this project to its `main` branch.
2. In Vercel, select **Add New → Project**, import that GitHub repository, and deploy.
3. Vercel detects Next.js automatically. No environment variables are required.

## Important RSVP note

The current RSVP interaction validates the form and shows an on-screen confirmation, but it intentionally does not persist personal data. To collect responses, connect the submit handler in `src/components/RSVPForm.tsx` to your preferred endpoint (for example, a secure Next.js route backed by a database or a form provider).

## Wedding content

All schedule and contact details are centralized in `src/lib/wedding-data.ts`.
