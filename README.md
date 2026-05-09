# 🍔 CampBites — Premium Restaurant Website

> *Slow-cooked. Boldly served.*  
> Pune's legendary smash-burger institution since 1978.

![CampBites](https://img.shields.io/badge/CampBites-EST.%201978-C9973A?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)

---

## 🌐 Live Site

**[campbites.netlify.app](https://campbites.netlify.app)**

---

## 📖 About

CampBites is a premium restaurant website for a fictional Pune-based smash burger institution. Built with a dark, editorial aesthetic inspired by fine dining — featuring handcrafted animations, a full menu system, cart functionality, and a reservation flow.

---

## ✨ Features

- **Hero Section** — Full-screen cinematic burger photography with animated headline
- **Interactive Menu** — Filterable menu with categories (Burgers, Fries, Shakes, Sides)
- **Cart System** — Add/remove items, quantity control, live total
- **Marquee Ticker** — Smooth infinite-scroll brand ticker
- **Testimonials** — Guest reviews section
- **Our Story Page** — Brand history and values
- **Contact / Reserve** — Table reservation and contact form
- **Responsive Design** — Mobile-friendly layout
- **Page Transitions** — Smooth fade animations between pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| CSS-in-JS | Inline styles with design tokens |
| Google Fonts | Cormorant Garamond, DM Mono, Jost |
| Netlify | Hosting & deployment |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── cart/
│   │   └── CartDrawer.jsx       # Slide-out cart panel
│   ├── common/
│   │   ├── Buttons.jsx          # GoldBtn, GhostBtn components
│   │   └── Typography.jsx       # Eyebrow, Heading components
│   ├── layout/
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── Footer.jsx           # Site footer
│   └── menu/
│       └── MenuCard.jsx         # Individual menu item card
├── context/
│   └── CartContext.jsx          # Global cart state (React Context)
├── data/
│   └── menu.js                  # Menu items data & image paths
├── pages/
│   ├── Home.jsx                 # Landing page
│   ├── Menu.jsx                 # Full menu page
│   ├── About.jsx                # Our story page
│   └── Contact.jsx              # Reservation & contact page
├── theme/
│   └── colors.js                # Design tokens (colors, spacing)
├── App.jsx                      # Root component & routing
├── main.jsx                     # React DOM entry point
└── index.css                    # Global styles & animations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/saurabhworkspacestudio-git/CampBites.git

# Navigate into the project
cd CampBites

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `bg` | `#0F0B08` | Page background |
| `gold` | `#C9973A` | Accent color |
| `cream` | `#F0E8D8` | Primary text |
| `muted` | `rgba(240,232,216,0.45)` | Secondary text |
| `surface` | `#141008` | Section backgrounds |

**Fonts:**
- `Cormorant Garamond` — Headlines & editorial text
- `DM Mono` — Labels, badges, monospaced text
- `Jost` — Body text & UI elements

---

## 📦 Deployment

This project is deployed on **Netlify** with the following config (`netlify.toml`):

```toml
[build]
  command = "npm install && node ./node_modules/vite/bin/vite.js build"
  publish = "dist"
```

Every push to `main` triggers an automatic redeploy.

---

## 🙏 Credits

- Photography via [Unsplash](https://unsplash.com)
- Fonts via [Google Fonts](https://fonts.google.com)

---

*CampBites — MG Road, Camp, Pune. Est. 1978.*
