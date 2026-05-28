# Amilcar Trucking LLC — Website

I built this frontend website for my dad's trucking business, Amilcar Trucking LLC. It's a modern one-page site built with React, Vite, and Tailwind CSS.

---

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

---

## Project Structure

```
src/
  components/
    Navbar.tsx       — sticky navigation bar with smooth scroll and mobile menu
    Hero.tsx         — full-screen hero section with background image
    About.tsx        — company info, stats, and values
    Services.tsx     — service cards (Gravel, Asphalt, Mulch, Sand, Milling, Job Site Support)
    Contact.tsx      — contact info cards (phone, email, service area)
    Footer.tsx       — footer with links and company info
  App.tsx            — root component, wires everything together
  main.tsx           — entry point
  index.css          — Tailwind imports and global styles
```

---

## Company Info

- **Company:** Amilcar Trucking LLC
- **Phone:** 703-296-9499
- **Email:** amilcartruckingllc@gmail.com
- **Service Area:** Virginia
- **In Business:** 10+ years

---

## Services

- Gravel
- Asphalt
- Mulch
- Sand
- Milling
- Job Site Support

---

## How to Run Locally

```bash
cd AmilcarTruckingLLC.com
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## How to Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Set the **root directory** to `AmilcarTruckingLLC.com`
4. Vercel auto-detects Vite — no extra config needed
5. A `vercel.json` file is already included for SPA routing

---

## Swapping the Hero Background Image

To use a real dump truck photo:

1. Save your photo as `dump-truck.jpg`
2. Drop it into the `public/` folder
3. In `src/components/Hero.tsx`, change the `backgroundImage` URL to `/dump-truck.jpg`
