// server/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: Date.now() });
});

app.get("/api/services", (req, res) => {
  res.json([
    { id: 1, title: "Haircut", price: 250 },
    { id: 2, title: "Shave", price: 120 },
    { id: 3, title: "Facial", price: 400 }
  ]);
});

// Static file serving for production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public", "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
