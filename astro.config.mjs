import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();
const urlInput = siteUrl || vercelUrl;
const normalizedUrl = urlInput
  ? /^(https?):\/\//i.test(urlInput)
    ? urlInput
    : `https://${urlInput}`
  : undefined;
const deploymentUrl = normalizedUrl ? new URL(normalizedUrl).toString() : undefined;

export default defineConfig({
  ...(deploymentUrl ? { site: deploymentUrl } : {}),
  integrations: deploymentUrl ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
