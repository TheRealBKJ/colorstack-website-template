# ColorStack Chapter Website Template

### A scalable, open-source website template for ColorStack chapters, built to support everything from a static marketing site to a fully authenticated chapter platform.

This template is designed for:
- Easy customization by individual chapters
- Clean separation of frontend and backend concerns
- Future extensibility (auth, dashboards, events, members, sponsors)

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Server Components by default, Client Components where necessary

### Backend
- Express.js
- REST API architecture
- Typed request/response contracts

### Authentication & Data
- Supabase Auth (email/password, OAuth-ready)
- Supabase Postgres (managed database)
- Row Level Security (RLS) for chapter-level isolation
