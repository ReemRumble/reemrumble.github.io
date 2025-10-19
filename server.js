// Minimal Node.js status proxy for your FiveM server
// Run: npm i express node-fetch && node server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const GAME = "http://YOUR.IP.HERE:30120";

app.get("/status.json", async (req, res) => {
  try {
    const [info, players] = await Promise.all([
      fetch(GAME + "/info.json"),
      fetch(GAME + "/players.json")
    ]);
    const i = await info.json();
    const p = await players.json();
    res.setHeader("Cache-Control", "no-store");
    res.json({
      hostname: i?.vars?.sv_hostname || "Server",
      max: i?.vars?.sv_maxClients || null,
      online: Array.isArray(p) ? p.length : 0
    });
  } catch (e) {
    res.status(502).json({ error: "offline" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Status proxy on port", PORT));
