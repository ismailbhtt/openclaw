import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.openclawinstall.cc';
const pages = [
  { url: "/", priority: "1.0" },
  { url: "/agents/autonomous-sdr", priority: "0.8" },
  { url: "/agents/truck-dispatcher", priority: "0.8" },
  { url: "/agents/inbox-manager", priority: "0.8" },
  { url: "/agents/lead-nurture", priority: "0.8" },
  { url: "/agents/customer-support", priority: "0.8" },
  { url: "/agents/custom-agent", priority: "0.8" },
  { url: "/install/docker", priority: "0.7" },
  { url: "/install/troubleshooting", priority: "0.6" },
  { url: "/install/linux", priority: "0.7" },
  { url: "/install/clawbot", priority: "0.7" },
  { url: "/install/open-claw", priority: "0.7" },
  { url: "/what-is-open-claw", priority: "0.9" },
  { url: "/privacy-policy", priority: "0.3" },
  { url: "/terms-of-service", priority: "0.3" },
  { url: "/contact", priority: "0.8" },
  { url: "/about", priority: "0.8" },
  { url: "/blog", priority: "0.9" },
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map((page) => `  <url>
    <loc>${baseUrl}${page.url === "/" ? "" : page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join("\n")}
${blogPosts
  .map((post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${post.image}</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${post.excerpt.replace(/&/g, '&amp;')}</image:caption>
    </image:image>
  </url>`)
  .join("\n")}
</urlset>`.trim();

const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

Sitemap: ${baseUrl}/sitemap.xml`;

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distPath, 'robots.txt'), robots);

console.log('Sitemap and robots.txt generated in dist/');
