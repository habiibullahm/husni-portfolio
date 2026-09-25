import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const deploymentUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).toString()
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

export default defineConfig({
  ...(deploymentUrl ? { site: deploymentUrl } : {}),
  integrations: deploymentUrl ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
