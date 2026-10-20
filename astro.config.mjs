import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const configuredSite = process.env.SITE_URL?.trim();
const site = configuredSite && /^https?:\/\//.test(configuredSite) ? configuredSite : "https://cogonmarket.com";

export default defineConfig({
  site,
  integrations: site ? [sitemap({ filter: (page) => !page.endsWith("/404/") })] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});
