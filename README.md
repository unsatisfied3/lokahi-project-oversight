# Lōkahi · Project Oversight Dashboard

A web app prototype exploring how teams can review, track, and publish Independent Verification and Validation (IV&V) project reports.

The interface brings together administrator workflows, vendor report submission screens, and a public report catalog.

**Status:** Design and development prototype. Dashboard metrics and public catalog entries include sample data; they are not verified government reporting.

## Explore the prototype

| Route | Experience |
| --- | --- |
| `/admin/dashboard` | Report overview, metrics, and charts |
| `/admin/projects` | Project management screens |
| `/admin/reports` | Report review screens |
| `/vendor/dashboard` | Vendor overview |
| `/vendor/reports` | Vendor report list |
| `/vendor/report/new` | Report submission form |
| `/public/catalog` | Searchable public report catalog |

The root route currently opens the administrator dashboard. The repository also includes authentication screens, a Supabase integration, and a chat edge function. Backend-dependent features require a configured Supabase project; the presence of a screen does not mean its production workflow is complete.

## Run locally

Install Node.js and npm compatible with the Vite version in [package.json](package.json), then run:

```sh
git clone https://github.com/unsatisfied3/lokahi-project-oversight.git
cd lokahi-project-oversight
npm ci
```

Configure your own Supabase project in an untracked `.env.local` file:

```dotenv
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

These variables are read by the browser client. Use a publishable key, never a service-role key. Database setup, access policies, authentication settings, and edge-function configuration must be handled in the corresponding Supabase project.

Start the app:

```sh
npm run dev
```

Open the local URL printed by Vite.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview a local build |

## Built with

React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Recharts, and Supabase.

## Project structure

| Folder | Contents |
| --- | --- |
| `src/pages/` | Administrator, vendor, public, and authentication screens |
| `src/components/` | Shared interface components |
| `src/integrations/supabase/` | Supabase client and generated types |
| `src/assets/` | Branding and images |
| `supabase/functions/` | Edge-function source |

## Lovable project

This project was created with Lovable. The original workspace is preserved here:

[Open the Lovable project](https://lovable.dev/projects/b18ad444-434f-4c74-aeaa-7d306cead37c)

## Designer

[Aveline Wang](https://www.avelinewang.com/)
