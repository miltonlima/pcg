# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a React single-page application (SPA) scaffolded with Vite.
- Main entry point: `src/App.jsx` manages routing and navigation using `react-router-dom`.
- Pages are organized under `src/pages/`, with each page having its own `.jsx` and `.css` file.
- Shared components are in `src/components/`.
- Static assets are in `src/assets/` and `public/`.

## Routing & Navigation
- All routes are defined in `src/App.jsx` using `<Routes>` and `<Route>` from `react-router-dom`.
- Navigation logic ("Voltar"/"Avançar") is handled via `useLocation` and dynamic `Link` targets.
- Example routes: `/`, `/info`, `/contrato`, `/contato`, `/sucesso`.
- When adding new pages, update both the import and the `<Routes>` block in `App.jsx`.

## Styling
- Each page/component typically has a corresponding CSS file (e.g., `Home.css`, `Contrato.css`).
- Global styles are in `src/App.css` and `src/index.css`.

## Build & Run
- Use Vite for development and builds:
  - Start dev server: `npm run dev`
  - Build for production: `npm run build`
- Hot Module Replacement (HMR) is enabled by default.

## Linting
- ESLint is configured via `eslint.config.js`.
- Run lint checks with: `npm run lint` (if script exists) or manually via ESLint CLI.

## Conventions & Patterns
- Use functional components and React hooks (e.g., `useLocation`).
- Page and component files are PascalCase.
- Route paths and file names should match for clarity.
- Avoid duplicate imports (see `App.jsx` for example).
- Keep navigation logic centralized in `App.jsx`.

## External Dependencies
- Core: `react`, `react-dom`, `react-router-dom`, `vite`.
- Plugins: See `README.md` for official Vite React plugins.

## Example: Adding a New Page
1. Create `src/pages/NewPage.jsx` and `src/pages/NewPage.css`.
2. Import and add a `<Route path="/newpage" element={<NewPage />} />` in `App.jsx`.
3. Update navigation logic if needed.

## Key Files
- `src/App.jsx`: Routing, navigation, and main layout.
- `src/pages/`: Individual page components.
- `src/components/`: Shared UI components.
- `public/`: Static assets.
- `eslint.config.js`: Linting rules.
- `vite.config.js`: Vite configuration.

---

If any conventions or workflows are unclear, please provide feedback so this guide can be improved.