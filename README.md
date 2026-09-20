# Attendance Register

A single-page attendance tracker built for B.Tech IT, Section IT-2 (B8), JSS
University Noida — Semester I. Tracks attendance against the 75% exam-eligibility
cutoff, with a calendar view, monthly graphs, per-subject streaks, dark mode,
and an AI assistant tab you can ask things like *"Can I miss this class tomorrow?"*

This is a static React app — everything you mark is stored locally in your
own browser (no accounts, no database). It's pre-built and ready to serve
directly from GitHub Pages with no build step required on your end.

---

## Project structure

```
.
├── index.html      # HTML shell — loads bundle.js
├── bundle.js         # Pre-built app (regenerate with `npm run build` after editing src/)
├── build.js
├── package.json
└── src/
    ├── main.jsx        # React entry point
    └── App.jsx          # The entire app
```

---

## Get it live on GitHub Pages

1. Unzip this project. Open the unzipped folder and select everything
   **inside** it (`index.html`, `bundle.js`, `src/`, etc.) — not the outer
   folder itself.
2. Drag that selection into your GitHub repo's upload page (or use `git add`
   / GitHub Desktop if you prefer). Commit the changes.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy
   from a branch**, then set the branch to `main` and the folder to
   **`/ (root)`**. Save.
4. GitHub gives you a live link at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

That's it — no build command, no environment variables, nothing else to
configure.

---

## Making changes later

If you edit `src/App.jsx` (e.g. to update the timetable for a new semester),
you need to rebuild `bundle.js` before GitHub Pages will show the change,
since Pages only serves files exactly as committed:

```bash
npm install
npm run build
```

This regenerates `bundle.js` at the project root. Commit and push the
updated file, and Pages will pick it up automatically.

---

## About the AI Assistant tab

The Assistant tab is built to call a small backend that forwards your
question to Claude. GitHub Pages only serves static files — it can't run
that backend — so on a plain GitHub Pages deploy, the Assistant will reply
that it couldn't reach the service. Everything else in the app (marking
attendance, the calendar, graphs, streaks, dark mode) works fully offline
and is unaffected.

If you'd like the Assistant working too, that needs a host that supports
serverless functions (Netlify, Vercel, Cloudflare Pages, etc.) — let me know
if you want that version instead.

---

## Data storage

All attendance records and preferences are stored in your browser's
`localStorage` — nothing is sent to or stored on a server. Data is
per-browser, per-device, with no login and no cross-device sync.

---

## Customizing for a different section/timetable

The timetable, subjects, and colors are set in `src/App.jsx` at the top of
the file (`SUBJECTS` and `TIMETABLE` constants). Edit those two objects to
adapt this to a different section or semester — everything else
(percentages, calendar, graphs, streaks) is derived from them automatically.
Then rebuild (`npm run build`) and redeploy.
