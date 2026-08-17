# Workers Static Assets 构建核验

## 实际项目结构

该项目是一个单包 Astro 静态站点，不包含 `pnpm-workspace.yaml`、数据库、登录、CMS、API 路由或自定义 Worker 代码。构建配置采用 `astro.config.mjs`、`wrangler.jsonc` 与 `package.json` 三个根文件协作：Astro 输出完全预渲染的 `dist/`，Wrangler 将该目录定义为 Workers Static Assets。

| 配置项 | 已核实的值 | 作用 |
| --- | --- | --- |
| Astro 输出 | `static` | 所有页面在构建时生成，适合无后端单页站点。 |
| Workers 配置 | `assets.directory: ./dist` | 将 `dist/` 作为 Workers Static Assets 上传目录。 |
| Worker 入口 | 无 `main` 字段 | 静态站点不需要自定义 Worker；这是官方静态 Astro 路线。 |
| 404 行为 | `not_found_handling: 404-page` | 未找到资源时使用静态 404 行为。 |
| 域名来源 | `SITE_URL` → `astro.config.mjs` 的 `site` | 域名为空仍可构建；此时绝对 canonical / OG URL 与 sitemap 均优雅省略。 |

## 实际构建产物

经过 `pnpm build` 后，`dist/` 的产物为：

```text
dist/
├── _astro/
│   └── index.<hash>.css
├── apple-touch-icon.png
├── favicon-16.png
├── favicon-32.png
├── favicon.svg
├── index.html
├── robots.txt
└── site.webmanifest
```

`pnpm wrangler deploy --dry-run` 已读取该目录中的 9 个静态文件并正常退出。构建未生成 `_worker.js/` 是预期结果：本项目使用的是 **无自定义 Worker 的 Workers Static Assets 模式**，而非 Astro SSR Worker 模式。

## 核验结论

在 Node `22.12.0` 和 pnpm `9.15.5` 下，`CI=1 pnpm install --frozen-lockfile`、`pnpm check`、`pnpm build` 以及 `pnpm wrangler deploy --dry-run` 均完成。产物扫描未发现 `example.com`、`localhost` 或 `chrome-extension://`。由于尚未提供生产域名，sitemap 按设计未生成；在部署前仅需设置 `SITE_URL=https://实际域名` 并重新构建，站点 URL、canonical、Open Graph、JSON-LD 与 sitemap 将由同一 Astro `site` 配置派生。
