# CLAUDE.md

Guidance for AI assistants working on the FlyRank Capstone frontend project.

## Project Overview

FlyRank Capstone is a frontend web application built as a capstone assignment. The stack is intentionally lightweight: plain HTML, CSS, and JavaScript with Node.js used only for local development tooling.

## Tech Stack

- **HTML** — semantic markup, accessibility-first structure
- **CSS** — custom styles (no framework unless explicitly added)
- **JavaScript** — vanilla ES6+ modules, no React/Vue/Angular unless requested
- **Node.js** — dev server and npm scripts only
- **Git** — feature-branch workflow

## Project Structure

```
FlyRank_capstone/
├── index.html              # Main HTML entry point
├── css/
│   ├── main.css            # Global styles, CSS variables, resets
│   ├── layout.css          # Grid, flexbox, page layout utilities
│   └── components/         # Component-specific stylesheets
│       ├── header.css
│       └── footer.css
├── js/
│   ├── main.js             # App entry point; initializes modules
│   └── modules/            # Feature modules (one concern per file)
│       ├── api.js          # Data fetching / mock API calls
│       └── ui.js           # DOM updates and event binding
├── assets/
│   ├── images/             # PNG, JPG, SVG, WebP
│   ├── fonts/              # Custom web fonts
│   └── icons/              # Favicon and UI icons
├── package.json            # Dependencies and npm scripts
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT License
├── README.md               # Human-readable documentation
└── CLAUDE.md               # AI assistant guidance (this file)
```

### File Responsibilities

| Path | Responsibility |
|------|----------------|
| `index.html` | Page skeleton, semantic sections, script/style links |
| `css/main.css` | Design tokens (`:root` variables), base typography, resets |
| `css/components/` | Scoped styles for individual UI components |
| `js/main.js` | Bootstraps the app; imports and calls module init functions |
| `js/modules/` | Reusable logic separated by feature or concern |
| `assets/` | Static files referenced via relative paths from HTML/CSS |

### Naming Conventions

- **Files:** lowercase with hyphens — `flight-card.css`, `search-form.js`
- **CSS classes:** BEM-style preferred — `.card`, `.card__title`, `.card--featured`
- **JavaScript:** camelCase for variables and functions — `fetchFlights`, `renderResults`
- **Constants:** UPPER_SNAKE_CASE — `MAX_RESULTS`, `API_BASE_URL`

## Coding Conventions

### HTML

- Use semantic elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Include meaningful `alt` text on images and proper ARIA labels where needed
- Keep one primary `<h1>` per page; maintain logical heading hierarchy (`h1` → `h2` → `h3`)
- Link stylesheets in `<head>` and defer scripts at the end of `<body>` (or use `type="module"`)
- Use `<button>` for actions and `<a>` for navigation — never substitute one for the other
- Validate forms with native HTML attributes (`required`, `type="email"`, `pattern`) before JavaScript

### CSS

- Organize styles by component or page section; one file per major component when possible
- Define design tokens as CSS custom properties in `:root`:

  ```css
  :root {
    --color-primary: #2563eb;
    --spacing-md: 1rem;
    --font-body: system-ui, sans-serif;
  }
  ```

- Mobile-first responsive design with `min-width` media queries
- Avoid inline styles and `!important` unless overriding third-party code
- Prefer flexbox and CSS Grid for layout; avoid float-based layouts
- Group selectors logically: layout → typography → color → states (`:hover`, `:focus-visible`)

### JavaScript

- Use ES6 modules (`import` / `export`); one module per file
- Prefer `const` and `let` over `var`
- Use `addEventListener` instead of inline event handlers (`onclick`, etc.)
- Cache repeated DOM queries in variables at module scope or init time
- Use `async/await` for asynchronous operations; handle errors with `try/catch`
- Avoid global variables; expose only what other modules need via exports
- Keep functions small and single-purpose; extract helpers when logic exceeds ~20 lines

### General

- Indent with 2 spaces (HTML, CSS, JS)
- Use UTF-8 encoding and LF line endings
- Write self-documenting code; add comments only for non-obvious business logic
- No frameworks (React, Vue, Tailwind, etc.) unless the user explicitly requests them

## Git Workflow

### Branch Strategy

Work on feature branches branched from `main` (or `master`):

```
main
 └── feature/add-search-form
 └── fix/mobile-nav-overflow
 └── docs/update-readme
```

### Branch Naming

| Prefix | Use for |
|--------|---------|
| `feature/` | New functionality — `feature/flight-results-table` |
| `fix/` | Bug fixes — `fix/form-validation-error` |
| `docs/` | Documentation only — `docs/add-setup-guide` |
| `refactor/` | Code restructuring — `refactor/extract-api-module` |

### Commit Messages

- Use imperative mood: **"Add search filter"**, not "Added search filter"
- Keep the subject line under 72 characters
- Focus on *why* when the change is not obvious

```
Add client-side form validation for flight search

Prevent empty submissions and show inline error messages
before the mock API call runs.
```

### Standard Workflow

1. Pull latest changes: `git pull origin main`
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make changes and test locally (`npm start`)
4. Stage selectively: `git add <files>` (avoid `git add .` unless intentional)
5. Commit: `git commit -m "Describe your change"`
6. Push: `git push -u origin feature/your-feature-name`
7. Open a pull request for review

### What Not to Commit

- `node_modules/`
- `.env` and other secret/credential files
- OS files (`.DS_Store`, `Thumbs.db`)
- Build artifacts (`dist/`, `build/`)
- Editor config unless the team agrees (`.vscode/`, `.idea/`)

## AI Assistant Guidelines

### Scope and Approach

1. **Minimize scope** — make the smallest change that solves the task; do not refactor unrelated code
2. **Match existing patterns** — read surrounding files before adding new code; mirror naming, structure, and style
3. **No over-engineering** — avoid frameworks, build tools, abstractions, or helpers the project does not already use
4. **Reuse before creating** — extend existing modules and stylesheets rather than duplicating logic

### Quality Standards

5. **Accessibility matters** — keyboard navigation, visible focus states, color contrast, and screen-reader support are expected on every UI change
6. **Mobile-first** — verify layouts work on small screens before adding desktop enhancements
7. **Test manually** — confirm changes in the browser; do not assume code works without verification

### Boundaries

8. **Do not modify** `.git/`, `LICENSE`, or `CLAUDE.md` unless explicitly asked
9. **Do not commit or push** unless the user explicitly requests it
10. **Do not add dependencies** to `package.json` without user approval
11. **Do not create documentation files** (README, markdown guides) unless requested

### Communication

12. **Explain trade-offs** when multiple valid approaches exist; recommend one and proceed unless the user prefers otherwise
13. **Cite existing code** using `startLine:endLine:filepath` format when referencing the codebase
14. **Flag blockers early** — missing assets, broken npm scripts, or unclear requirements should be reported before guessing

## Development Commands

```bash
npm install    # Install dependencies
npm start      # Start local dev server
```

## Common Tasks

| Task | Approach |
|------|----------|
| Add a new page | Create HTML file, link CSS/JS, update navigation |
| Add styling | Add or extend files in `css/` or `css/components/` |
| Add interactivity | Create or extend a module in `js/modules/`, import in `main.js` |
| Add static assets | Place files in the appropriate `assets/` subfolder |
| Add a new npm script | Update `package.json` scripts; document in README |
