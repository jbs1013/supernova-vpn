
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

// Supernova homepage
app.get("/", (req, res) => {
  res.json({
    name: "Supernova Proxy",
    status: "online",
    message: "Welcome to Supernova"
  });
});

// API health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "supernova-api"
  });
});

// Supernova internal proxy test page
app.get("/proxy-test", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Supernova Proxy Test</title>
      </head>
      <body style="background:#090d1b;color:white;font-family:Arial;text-align:center;padding:50px">
        <h1>Supernova Proxy</h1>
        <p>Your test page is working!</p>
        <p>Backend connection successful.</p>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("Supernova API running on port " + PORT);
});
