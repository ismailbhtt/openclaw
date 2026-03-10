import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.openclawinstall.cc';
const pages = [
  "/",
  "/install/docker",
  "/install/troubleshooting",
  "/install/linux",
  "/install/clawbot",
  "/install/open-claw",
  "/what-is-open-claw",
  "/privacy-policy",
  "/terms-of-service",
  "/contact",
  "/about",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const url = page === "/" ? `${baseUrl}/` : `${baseUrl}${page}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`.trim();

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distPath, 'robots.txt'), robots);

console.log('Sitemap and robots.txt generated in dist/');
