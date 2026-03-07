# ![Kaaba - Premium Hajj & Umrah](./public/posters/cover.png)

<div align="center">

**Premium Hajj & Umrah journeys with curated packages, trusted guidance, and seamless planning.**

A high-performance, responsive landing page that helps pilgrims discover and book their sacred journey with confidence.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Motion-12-black?logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

## ✨ Why Kaaba?

Planning a Hajj or Umrah trip is a deeply personal and complex endeavor. Kaaba provides a clean, focused experience that lets pilgrims:

- **Browse curated packages** — from Comfort to Elite, with transparent pricing
- **Compare travel options** at a glance with feature-rich cards
- **Book confidently** with a trusted, well-designed interface
- **Get inspired** through a rich gallery and community stats

Whether you're a first-time pilgrim or a returning visitor, Kaaba cuts through the noise and gets you to what matters.

![Kaaba - Hajj & Umrah Landing Page](./public/posters/hero.png)

## 🚀 Quick Start

```bash
pnpm install
pnpm run build
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🛠️ Tech Stack

| Layer         | Technology                  |
| ------------- | --------------------------- |
| Framework     | Next.js 16 (App Router)     |
| Language      | TypeScript 5                |
| Styling       | Tailwind CSS 4              |
| Animation     | Motion (Framer Motion)      |
| Date Handling | date-fns + react-day-picker |
| Icons         | react-icons                 |
| Notifications | react-toastify              |

---

## 📦 Packages Offered

| Package     | Price                | Highlights                                                 |
| ----------- | -------------------- | ---------------------------------------------------------- |
| **Comfort** | $900–$1,800/person   | 3-star hotel, daily breakfast, guided tours                |
| **Premium** | $1,200–$2,400/person | 4-star hotel, breakfast & dinner, transfers                |
| **Elite**   | $2,000–$4,000/person | Business class, 5-star hotel, all meals, private transfers |

> Group discounts available: 40% off for 2+ persons on 4+ nights.

---

## 📂 Project Structure

```structure
components/       UI sections (Hero, About, Packages, Gallery, etc.)
├── utils/        Reusable atoms (Button, Logo, DateRangePicker, etc.)
data/             Static content (packages, partners)
lib/              Design system tokens
public/           Static assets (images, gallery, posters)
src/app/          Next.js App Router (layout, page, globals)
```

---

## 🏗️ Getting Started (Full Guide)

### Prerequisites

- Node.js ≥ 18
- [pnpm](https://pnpm.io) ≥ 9

### Installation

```bash
git clone https://github.com/yusuf-mahran/kaaba.git
cd kaaba
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## 📄 Key Files

- [`src/app/page.tsx`](src/app/page.tsx) — Main landing page composition
- [`src/app/layout.tsx`](src/app/layout.tsx) — Root layout, fonts & metadata
- [`src/app/globals.css`](src/app/globals.css) — Global styles
- [`data/packages.ts`](data/packages.ts) — Travel package definitions
- [`data/partners.ts`](data/partners.ts) — Trusted partner logos
- [`lib/design-system.ts`](lib/design-system.ts) — Design tokens

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please use specific `git add <file>` commands rather than `git add .` to keep commits clean.

---

## 🛡️ Security

If you discover a security vulnerability, please open a [GitHub Issue](../../issues) or reach out privately. Do not disclose it publicly until it has been addressed.

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).

---

## 💬 Support

- Open an [Issue](../../issues) for bugs or feature requests
- Start a [Discussion](../../discussions) for questions and ideas

---

<div align="center">
  Made with ❤️ for every pilgrim's sacred journey
</div>
