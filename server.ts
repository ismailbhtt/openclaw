import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import fetch from "node-fetch";
import { blogPosts } from "./src/data/blogPosts.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: any = null;
try {
  db = new Database("leads.db");
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      company TEXT,
      plan TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
} catch (e) {
  console.warn("Could not initialize local SQLite database. This is expected on some platforms like Vercel.");
}

export async function createServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Request logging for debugging
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Host: ${req.get("host")}`);
    next();
  });

  // Redirect http to https and non-www to www in production
  app.use((req, res, next) => {
    const host = req.get("host") || "";
    const xForwardedProto = req.headers["x-forwarded-proto"];
    const isProduction = process.env.NODE_ENV === "production" || !host.includes("localhost");
    
    const isNotHttps = xForwardedProto && xForwardedProto !== "https";
    const isNonWww = !host.startsWith("www.") && !host.includes("localhost") && !host.includes(".run.app");

    if (isProduction && (isNotHttps || isNonWww)) {
      const newHost = isNonWww ? `www.${host}` : host;
      console.log(`Redirecting to: https://${newHost}${req.url}`);
      return res.redirect(301, `https://${newHost}${req.url}`);
    }
    next();
  });

  // API Route for form submission
  app.post("/api/submit-form", async (req, res) => {
    const { name, email, company, plan, message } = req.body;
    
    console.log("Form submission attempt:", { name, email, company, plan });

    try {
      // 1. Save to local SQLite database as backup (if available)
      if (db) {
        const stmt = db.prepare("INSERT INTO leads (name, email, company, plan, message) VALUES (?, ?, ?, ?, ?)");
        stmt.run(name, email, company, plan || 'General Inquiry', message || '');
        console.log("Lead saved to local SQLite database.");
      }
      
      // 2. Forward to Google Apps Script (Non-blocking)
      const gasUrl = 'https://script.google.com/macros/s/AKfycbzaAeAa2qxJzMNT7IJwU9m_jhn24119gO0LRV6MjrFVQb73JPyDBzhDq1lrt8leI5NE/exec';
      
      // We don't await this so the user gets an immediate response
      // even if the Google Script is slow or fails.
      fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          company, 
          plan: plan || 'General Inquiry', 
          message: message || '',
          timestamp: new Date().toISOString()
        })
      }).then(response => {
        if (response.ok) {
          console.log("Successfully forwarded to Google Sheets.");
        } else {
          console.error("Google Sheets forwarding failed with status:", response.status);
        }
      }).catch(err => {
        console.error("Error forwarding to Google Sheets:", err.message);
      });
      
      // Return success immediately since it's saved locally
      res.json({ success: true, message: "Lead captured successfully" });
    } catch (error: any) {
      console.error("Critical submission error:", error.message);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // API Route to get leads (for "Excel" export simulation)
  app.get("/api/leads", (req, res) => {
    if (!db) return res.json([]);
    // In a real app, you'd protect this with an admin password
    const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    res.json(leads);
  });

  // Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://www.openclawinstall.cc";
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
</urlset>`;

    res.header("Content-Type", "application/xml")
       .send(sitemap);
  });

  // Robots.txt route
  app.get("/robots.txt", (req, res) => {
    const baseUrl = "https://www.openclawinstall.cc";
    const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

Sitemap: ${baseUrl}/sitemap.xml`.trim();
    res.header("Content-Type", "text/plain")
       .header("Cache-Control", "public, max-age=3600")
       .send(robots);
  });

  // SPA Fallback for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      if (url.startsWith('/api') || url.includes('.')) {
        return next();
      }
      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(__dirname, "dist");
    
    // Serve static files from dist
    app.use(express.static(distPath, {
      maxAge: '1d',
      etag: true,
      index: false // Don't serve index.html automatically, we'll handle it below
    }));

    // Explicitly handle common routes to avoid any ambiguity
    const commonRoutes = ['/blog', '/agents', '/install', '/about', '/contact', '/privacy-policy', '/terms-of-service', '/what-is-open-claw'];
    
    app.get(commonRoutes.map(r => `${r}*`), (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

    // SPA Fallback for production
    app.get("*", (req, res) => {
      // Skip API routes
      if (req.url.startsWith('/api')) {
        return res.status(404).json({ error: "API route not found" });
      }

      // If it looks like a file (has an extension), and we reached here, it's a 404
      if (req.url.includes('.') && !req.url.endsWith('.html')) {
        return res.status(404).send('Not found');
      }

      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.sendFile(path.join(__dirname, "index.html"));
      }
    });
  }

  return { app, PORT };
}

// Start server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}` || process.env.NODE_ENV === "production") {
  createServer().then(({ app, PORT }) => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });
}
