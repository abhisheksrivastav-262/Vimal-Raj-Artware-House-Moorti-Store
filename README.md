# Vimal Raj Artware House — Moorti Store

Premium multipage website (React + TypeScript + Vite + Tailwind v4 + React Router).

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify / Vercel / cPanel). Uses `HashRouter` so deep links work without server rewrites.

## Real photos & videos only

All images/videos in `public/assets/` are genuine files copied from `Downloads/a` (no AI media):

| File | Content |
|---|---|
| `moorti-store-logo.jpg` | Official logo (header/footer/favicon) |
| `radha-krishna-gold-30inch.jpg` | 30", 31.250 kg gold pair |
| `radha-krishna-meenakari-31kg-30inch.jpg` | 30", 31 kg meenakari pair |
| `radha-krishna-meenakari-26kg-24inch.jpg` | 24", 26 kg meenakari pair |
| `krishna-venugopal-prabhavali-31inch.jpg` | 31", 30 kg Krishna |
| `brass-balaji-standing-24inch.jpg` | 24", 16.750 kg Balaji |
| `hanuman-brass-4kg-9inch.jpg` | 9", 4.1 kg Hanuman |
| `durga-lion-brass-145gm-3inch.jpg` | 3", 145 gm Durga |
| gift boxes, frames, pen holders, cow-calf | as named |
| `workshop-video-01.mp4`, `crafting-video-02.mp4`, `finishing-video-03.mp4` | real shop videos |

To change the default WhatsApp number, edit **one line** in `src/config/business.ts` → `defaultWhatsApp`.

## Pages

`/`, `/about`, `/products`, `/products/:slug`, `/craftsmanship`, `/gallery`, `/wholesale-export`, `/contact`, `/faq`, `/privacy-policy` + 404.

Forms validate in-browser and hand off to WhatsApp (`wa.me/91…?text=…`) — nothing is stored on the site.
