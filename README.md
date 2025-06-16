# ⚡ Next.js Static Site SEO Template

A minimal, high-performance **Next.js** template optimized for generating static pages with strong SEO support. Ideal for hosting on static site platforms (e.g., Vercel, Netlify), this template is perfect for quickly launching landing pages, product presentations, or micro-sites.

---

## ✨ Features

* ✅ **SEO-ready** via `Metadata.jsx` helper
* ⚡ **Blazing fast static pages** with `next export`
* 📱 Fully responsive layout with Tailwind CSS (optional)
* 🌐 Best practices for **OpenGraph**, **structured data**, and meta tags
* 🧠 Clean and easy to extend

---

## 📁 Project Structure

```bash
├── components/
│   └── Metadata.jsx      # SEO metadata + structured data generator
├── app/
│   └── page.jsx         # Example homepage
│   └── contatti/page.jsx
│   └── chi-siamo/page.jsx
├── public/               # Static assets
├── styles/               # Global styles (if any)
├── next.config.js        # Next.js config
└── README.md
```

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Build for Production

To generate a **fully static site**:

```bash
npm run build
# Output is saved in /out folder
```

You can now host the `/out` folder on any static hosting service (e.g., Hostinger, Register, Vercel, Netlify, etc..).

---

## 📦 Deploy

To deploy to Vercel (you have to be logged in before running this command):

```bash
npm vercel --prod
```

---

## 🧠 Metadata Helper

This template includes `components/Metadata.jsx`:

```js
import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";
```

Use it to inject:

* SEO titles and descriptions
* OpenGraph images
* Schema.org structured data (`WebPage`, `Article`, etc.)

---

## 👨‍💼 Author

Built with ❤️ using [Next.js](https://nextjs.org) and modern web practices.

---

## Support

If you find this project useful and would like to support its development, consider buying me a ☕!

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-donate-orange.svg)](https://www.buymeacoffee.com/virajperera
)


## 📜 License

[MIT](https://github.com/viraj-perera-dev/nextjs-static-page-template/blob/main/LICENSE)

