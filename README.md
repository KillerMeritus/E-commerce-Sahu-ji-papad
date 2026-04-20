# 🫓 Sahu Ji Ke Papad — E-Commerce Storefront

![Sahu Ji Ke Papad Banner](/public/images/hero-papad-collection.jpg)

**Sahu Ji Ke Papad** is a modern, bilingual e-commerce web application built for a traditional homemade papad brand from Madhya Pradesh. Designed with a custom "Saffron Hearth" aesthetic, it features a fluid user experience, offline-persistent shopping cart management, and a seamless WhatsApp-based checkout flow.

## ✨ Features

- **Bilingual Interface**: Features dual-language content (English and Hindi) elegantly typeset using Google Fonts (Tiro Devanagari Hindi, Noto Sans Devanagari, and Poppins).
- **"Saffron Hearth" Design System**: A bespoke design system utilizing "Paper-on-Paper" tiering, pure functional CSS variables, and glassmorphism.
- **WhatsApp Checkout**: Direct conversion loop that encodes the user's cart (items, variants, subtotal, and shipping rules) into a pre-filled WhatsApp message.
- **Fast & Responsive**: Mobile-first layouts ensure the store looks brilliant from smartphones to desktop screens. 
- **Persistent State Management**: Cart and Wishlist data persists across browser reloads using Zustand and local storage.
- **Dynamic Routing**: Built on `react-router-dom` for instant page transitions.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) + LocalStorage Persist
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: Pure CSS (Variables, Flexbox, CSS Grid)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## 💻 Running Locally

To run this project on your local machine, ensure you have Node.js installed.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KillerMeritus/E-commerce-Sahu-ji-papad.git
   cd E-commerce-Sahu-ji-papad
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI elements
│   ├── layout/          # Navbar and Footer components
│   └── shared/          # ProductCards, Badges, QuantityPickers
├── data/                # Static CMS for application data
│   ├── products.js      # Main product catalogue
│   └── categories.js    # Filter definitions
├── pages/               # Main application views
│   ├── HomePage         # Landing / Hero view
│   ├── ProductsPage     # Filterable product grid
│   ├── ProductDetailPage# Variant selection and details
│   ├── CartPage         # Cart summary and WhatsApp Checkout
│   ├── OurStoryPage     # Brand narrative
│   └── NotFoundPage     # 404 handler
├── store/               # Zustand state management
│   ├── cartStore.js     # Global cart state & persistence
│   └── wishlistStore.js # Global wishlist state & persistence
├── styles/              
│   └── tokens.css       # Saffron Hearth design variables
├── App.jsx              # Main routing shell
├── globals.css          # Base CSS reset and generic utility classes
└── main.jsx             # React entry point
```

## 🎨 Design System: Saffron Hearth

The custom **Saffron Hearth** design system was built with three guiding principles:
1. **Hearthside Editorial**: A layout that mimics a premium food magazine, using ample whitespace and clear typographic scale.
2. **"No-Line" Hierarchy**: Relying on spacing, background shades (Surface vs Card), and typography rather than hard borders.
3. **Ghost Interactions**: Floating glassmorphic components (like the Navbar and Action Badges) to prioritize product imagery without cluttering the screen.

**Core Tokens:**
- Saffron: `#F97316` (Primary interactive)
- Turmeric: `#FBBF24` (Highlights/Accents)
- Deep Ash: `#1C1917` (Primary Text)
- Warm Grey: `#78716C` (Secondary Text)
- Soft Cream: `#FAFAF7` (Canvas Background)

---

<p align="center">
  <i>"Asli ghar ka swaad, har niwale mein."</i>
</p>
