import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const configuredSite = process.env.SITE_URL?.trim();
const site = configuredSite && /^https?:\/\//.test(configuredSite) ? configuredSite : undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});
