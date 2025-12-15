# ColorStack Chapter Website Template

### A scalable, open-source website template for ColorStack chapters, built to support everything from a static marketing site to a fully authenticated chapter platform.

This template is designed for:
- Easy customization by individual chapters
- Clean separation of frontend and backend concerns
- Future extensibility (auth, dashboards, events, members, sponsors)


Basic functions of website
- provide info for chapter pages
- show leadership
- show mission statement
- chapter calendar
- signup for events
- contact info
- show chapter events
- show sponsors
- upload resumes to school book(user route protected)
- login for users/members of chapters 
  

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend
- Express.js
- REST API architecture

### Authentication & Data
- Supabase Auth (email/password, OAuth-ready)
- Supabase Postgres (managed database)
- Row Level Security (RLS) for chapter-level isolation
