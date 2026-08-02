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
├── index.html          # Main entry point
├── css/                # Stylesheets
├── js/                 # JavaScript modules
├── assets/             # Static assets (images, fonts, icons)
├── package.json        # Dependencies and npm scripts
└── README.md           # Human-readable documentation
```

## Conventions

### HTML
- Use semantic elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- Include meaningful `alt` text on images and proper ARIA labels where needed
- Keep one primary `<h1>` per page

### CSS
- Organize styles by component or page section
- Use CSS custom properties for colors, spacing, and typography tokens
- Mobile-first responsive design with `min-width` media queries
- Avoid inline styles

### JavaScript
- Use ES6 modules (`import` / `export`)
- Prefer `const` and `let` over `var`
- Use `addEventListener` instead of inline event handlers
- Keep DOM queries scoped and cache repeated selectors

### Git
- Branch naming: `feature/`, `fix/`, `docs/`
- Write clear, imperative commit messages (e.g., "Add navigation bar component")
- Do not commit `node_modules/`, `.env` files, or build artifacts

## Development Commands

```bash
npm install    # Install dependencies
npm start      # Start local dev server
```

## Guidelines for AI Assistants

1. **Minimize scope** — make the smallest change that solves the task
2. **Match existing patterns** — read surrounding code before adding new files or functions
3. **No over-engineering** — avoid frameworks, build tools, or abstractions the project does not use
4. **Accessibility matters** — keyboard navigation, contrast, and screen-reader support are expected
5. **Do not modify** `.git/`, `LICENSE`, or `CLAUDE.md` unless explicitly asked
6. **Do not commit** unless the user explicitly requests it

## Common Tasks

| Task | Approach |
|------|----------|
| Add a new page | Create HTML file, link CSS/JS, update navigation |
| Add styling | Add or extend files in `css/` |
| Add interactivity | Add or extend modules in `js/` |
| Add static assets | Place files in `assets/` and reference with relative paths |
