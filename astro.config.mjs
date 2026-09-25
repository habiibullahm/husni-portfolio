import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.SITE_URL?.trim();
const normalizedUrl = siteUrl
  ? /^(https?):\/\//i.test(siteUrl)
    ? siteUrl
    : `https://${siteUrl}`
  : undefined;
const deploymentUrl = normalizedUrl ? new URL(normalizedUrl).toString() : undefined;

export default defineConfig({
  ...(deploymentUrl ? { site: deploymentUrl } : {}),
  integrations: deploymentUrl ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
