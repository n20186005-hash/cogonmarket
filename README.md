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

The domain is configured once through the `site` value in `astro.config.mjs`, sourced from `SITE_URL`. When `SITE_URL` is empty, https://cogonmarket.com is used. Canonical metadata, JSON-LD URL and sitemap are derived from `Astro.site`.

## Local validation

```sh
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers Static Assets

`wrangler.jsonc` uses `./dist` as the Workers Static Assets directory. The custom Worker uses the ASSETS binding, normalizes HTTP/www requests on the production domain while preserving path and query, and adds noindex to real 404 responses. Astro produces the static `dist/` directory.

```sh
pnpm build
pnpm deploy
```

## Asset note

The layout references uploaded real-market photos and generated brand assets by their project storage paths. The research notes preserve the source context. Image copyrights remain with their photographers.
