# AGENTS.md

## Cursor Cloud specific instructions

This is the **Cursor SDLC Workshop** repository — a collection of independent React + Vite frontend apps (no backend, no databases, no Docker).

### Key services

| Service | Directory | Dev command | Port |
|---|---|---|---|
| Workshop Slides | `workshop-slides/` | `npm run dev` | 5175 |
| LinkedOut Team 1–5 | `linkedout/team_1/` … `linkedout/team_5/` | `npm run dev` | 3001–3005 |

### Lint / Build / Test

- **Lint**: `npm run lint` in `workshop-slides/` (only app with ESLint configured).
- **Build**: `npm run build` in any app directory.
- The linkedout team apps do not have a lint script or test suite.

### Dev server notes

- Each app is fully independent with its own `package.json` and `node_modules/`.
- There is no root `package.json` or workspace tooling — run `npm install` inside each app directory separately.
- The linkedout team apps use Vite 5 (CJS build warning is expected and harmless).
- Workshop slides use Vite 7.
