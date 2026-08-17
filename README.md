# Cogon Public Market

This is a single-page Astro website for Cogon Public Market in Cagayan de Oro. The information architecture and copy use Cebuano, the main local language.

## Technology and pinned environment

| Area | Choice |
| --- | --- |
| Application | Astro 7.2.2, Tailwind CSS 4.3.3, TypeScript 5.9.3 |
| Deployment | Cloudflare Workers Static Assets (pre-rendered Astro output) |
| Node | 22.12.0 (`.node-version` and `engines`) |
| Package manager | pnpm 9.15.5 (`packageManager`) |

## Configure a production domain

The domain is configured once through the `site` value in `astro.config.mjs`, sourced from `SITE_URL`. Keep `SITE_URL` empty for a successful preview build without canonical, Open Graph absolute URL, or sitemap output. Before deployment, set it to the final HTTPS address and rebuild; canonical metadata, JSON-LD URL and sitemap are then derived from `Astro.site`.

## Local validation

```sh
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers Static Assets

`wrangler.jsonc` uses `./dist` as the Workers Static Assets directory. This site has no server routes, database, login, or custom Worker logic, so the build intentionally produces a fully pre-rendered `dist/` directory without a custom `main`/`_worker.js` entry point. Wrangler deploys these files through the Workers Static Assets runtime in one operation.

```sh
SITE_URL=https://your-final-domain.tld pnpm build
pnpm deploy
```

## Asset note

The layout references uploaded real-market photos and generated brand assets by their project storage paths. The research notes preserve the source context. Replace non-owned visual material with licensed or owned images before public deployment where needed.
