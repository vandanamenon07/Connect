# LAR Connect: Bridging Futures

A highly interactive, responsive single-page web application built to bridge the rural-urban education gap by connecting students and teachers.

## Design System (Neubrutalism / Retro Pop)

- **Background**: Cream / soft off-white (`#FDFBF7`) with a subtle grid overlay.
- **Primary accents**: Vibrant lavender/periwinkle (`#7065FF`), soft yellow (`#FFF07C`), warm peach/orange (`#FFD59E`).
- **UI style**: Neo-brutalist cards, buttons, and badges with heavy black borders (3–4px solid `#000000`), rounded corners (16–24px radius), and offset hard drop shadows (`4px 4px 0px #000000`).
- **Typography**: Serif headings (Playfair Display) paired with clean sans-serif body text (DM Sans) and bold monospaced caps for badges (Space Mono).

## App Flow

1. **Landing**: Opens on the stylized "LAR Connect" name.
2. **Sign-in**: Standard auth fields plus "Sign in with Google".
3. **Onboarding**: A "Tell us about yourself" step to select role — Student or Teacher.
4. **Dashboard**: A highly interactive, non-scrolling home screen where navigation opens modals, tabs, and slide-out overlays rather than scrolling.

### Core Features

- Hero badges: "Bridging the Rural-Urban Education Gap" and "Empowering Teachers & Students".
- Fixed navigation menu with popup-based interactions.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- [TanStack Query](https://tanstack.com/query) for data fetching
- [Tailwind CSS v4](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)-style components (Radix UI primitives)
- [Nitro](https://nitro.build/) for the server build/deploy target
- [Vite](https://vitejs.dev/) as the build tool

## Development

You'll need [Node.js](https://nodejs.org/) (or [Bun](https://bun.sh/)).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

The dev server runs on `http://localhost:3000` by default.

## Available Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production (Nitro emits output to `.output/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — lint the codebase
- `npm run format` — format the codebase with Prettier

## Deployment

This app builds with [Nitro](https://nitro.build/), which supports deploying to a wide range of targets (Node.js server, Vercel, Netlify, Cloudflare Workers, Deno, and more). See the [TanStack Start hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) for target-specific configuration.

For a plain Node.js server, `npm run build` followed by `node .output/server/index.mjs` will serve the app.
