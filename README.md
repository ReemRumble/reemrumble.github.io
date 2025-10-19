# Real Lyfe RP — Free One-Click Join Website

This is a free, static landing page that lets players **launch FiveM and auto-connect** to your server from your website.

## ✏️ Quick Setup (5 minutes)

1. Open `index.html` and **replace**:
   - `ABCD12` → your real **cfx.re join code** (shown in your server console when it starts).
   - `YOUR.IP.HERE:30120` → your public IP and port (optional; only used for the visible status).

2. (Optional) If the status doesn't load due to CORS, deploy one proxy:
   - **Node.js**: upload `server.js`, run `npm i express node-fetch`, then `node server.js` (serves `/status.json`).
   - **PHP**: upload `status.php` to your hosting; it returns status JSON.

3. If you use a proxy, edit `index.html` and set:
   ```js
   const STATUS_ENDPOINT = "/status.json"; // or "/status.php"
   ```

## 🚀 Free Hosting Options

### GitHub Pages (fully free)
- Create a repo named `yourname.github.io`
- Upload `index.html` and `assets/` folder
- Visit `https://yourname.github.io` — live!
- (Status may need a proxy; GitHub Pages is static-only)

### Netlify / Vercel (free tier)
- Drag & drop this folder to Netlify, or connect the repo to Vercel
- Add your custom domain later if you want

### Replit (free-ish)
- Create a new HTML/CSS/JS repl and paste `index.html`
- For status proxy, create a Node repl with `server.js`

## 🔌 Join Link Formats

- Recommended: `fivem://connect/cfx.re/join/ABCD12`
- Direct IP: `fivem://connect/YOUR.IP.HERE:30120`

Also show F8 fallback: `connect cfx.re/join/ABCD12`

## 🛠 Server Requirements

In `server.cfg`:
```cfg
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
sv_licenseKey "YOUR_KEYMASTER_KEY"
sv_hostname "Real Lyfe RP"
```

Forward **30120 TCP & UDP** on your router/firewall.

## 🧪 Test

- From a **different PC**, click your site’s **Launch & Join**
- Browser should prompt to open FiveM → approve
- If FiveM opens but can’t connect → check ports/firewall/license key

## 🎨 Brand It

- Replace `assets/logo-placeholder.svg` with your logo (same filename)
- Colors are set at the top of `<style>` in `index.html` (teal/gold/ink)
- Update the name “Real Lyfe RP” in the navbar/title
