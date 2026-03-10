import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("leads.db");
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for form submission
  app.post("/api/submit-form", async (req, res) => {
    const { name, email, company, plan, message } = req.body;
    
    try {
      // 1. Save to local SQLite database as backup
      const stmt = db.prepare("INSERT INTO leads (name, email, company, plan, message) VALUES (?, ?, ?, ?, ?)");
      stmt.run(name, email, company, plan || 'General Inquiry', message || '');
      
      console.log("New Lead Saved Locally:", { name, email, company, plan, message });
      
      // 2. Forward to Google Apps Script
      const gasUrl = 'https://script.google.com/macros/s/AKfycbzaAeAa2qxJzMNT7IJwU9m_jhn24119gO0LRV6MjrFVQb73JPyDBzhDq1lrt8leI5NE/exec';
      
      try {
        const gasResponse = await fetch(gasUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...req.body, plan: plan || 'General Inquiry' })
        });
        
        if (gasResponse.ok) {
          console.log("Lead successfully forwarded to Google Sheets");
        } else {
          console.error("Failed to forward lead to Google Sheets:", gasResponse.statusText);
        }
      } catch (gasError) {
        console.error("Error forwarding to Google Sheets:", gasError);
      }
      
      res.json({ success: true, message: "Lead captured successfully" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ success: false, message: "Failed to save lead" });
    }
  });

  // API Route to get leads (for "Excel" export simulation)
  app.get("/api/leads", (req, res) => {
    // In a real app, you'd protect this with an admin password
    const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    res.json(leads);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
