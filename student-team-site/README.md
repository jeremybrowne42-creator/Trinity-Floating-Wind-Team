# Trinity Floating Wind Team – Student Site

Fast, accessible marketing site for the Trinity Floating Wind student team built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to preview. Run `npm run build` to verify the production bundle and `npm run lint` before opening a pull request.

## Content Editing

All public content lives in `src/data/*.json`:

- Add/update sponsors: edit `src/data/sponsors.json`
- Add a supporter: edit `src/data/supporters.json`
- Add gallery items: edit `src/data/gallery.json`
- Add projects or detail fields: edit `src/data/projects.json`
- Update team structure: edit `src/data/team.json`
- Add awards or media mentions: edit `src/data/awards.json`

Files are human-readable so non-technical contributors can edit directly in GitHub. Keep placeholder image paths until final assets are ready.

## Tech Stack

- Next.js App Router, TypeScript, Tailwind CSS
- shadcn/ui components for consistent UI
- MDX-ready pages for richer content blocks
- JSON-driven data for student-friendly updates
- Ready-to-run CI workflow (GitHub Actions)

## TODO

- [ ] Replace placeholder images in `/public`
- [ ] Wire contact form to preferred service (email, Airtable, etc.)
- [ ] Refresh SEO copy + OG artwork before launch

