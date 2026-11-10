
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

app.get("/", (req, res) => {
  res.json({
    name: "Supernova VPN",
    status: "online",
    message: "Welcome to Supernova VPN"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "supernova-api"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Supernova API running on port ${PORT}`);
});
