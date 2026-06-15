# Techzonix — Premium Electronics PWA Storefront

**Techzonix** is a high-performance, fully responsive, and offline-capable electronics and gadgets e-commerce storefront. Designed as a state-of-the-art Progressive Web App (PWA), it offers a seamless, app-like desktop and mobile experience. Built with **React 19**, **Vite 7**, and **Tailwind CSS 4**.

---

## 🚀 Key Features

### 1. Progressive Web App (PWA) Capabilities
* **Offline Caching**: Leverages Workbox service workers to cache essential app shells, routes, pages, images, and fonts, enabling the store to load and function offline or on spotty networks.
* **Auto-Update & Reload Prompt**: Alerts users to refresh the page when new features or code updates are deployed, updating the app smoothly in the background.
* **Multi-channel PWA Installation**: Custom, state-aware "Install App" cues are built into key entry points:
  * **Desktop**: Announcement Bar (top of the page) and Quick Links (global Footer).
  * **Mobile**: Navigation drawer drawer-menu.
* **Web App Manifest**: Configured with splash screens, theme styling colors, and icons tailored for Android, iOS, and desktop operating systems.

### 2. Premium E-Commerce UX
* **Full Shopping Journey**: Interactive product listings, deep search with auto-suggest, multi-category filters, comparison matrix, product image galleries (Swiper), persistent shopping cart, and wishlist.
* **Smart Route Guarding**: Unauthenticated users attempting to access protected pages (like `/checkout` or `/account`) are safely redirected to `/login`, passing their routing intent. Upon successful log in, they are redirected straight back to their destination instead of a generic landing.
* **Robust Checkout Validation**: Complete checkout form validation:
  * Dynamic, option-bound shipping calculations (Standard vs. Express).
  * Card parameter checks (16-digit card validation, MM/YY expiry, CVV validation).
  * Mandatory Terms & Conditions consent.
  * Real-time visual error cues (red border highlights) and submit-attempt error banners.
* **Persistent States**: Utilizes client-side local storage to persist the user's shopping cart, wishlist, and comparison lists between browser visits.

### 3. Developer Tooling & Code Quality
* **HMR & Fast Refresh**: Fully compliant context providers and modular component separation (e.g. data arrays extracted to standalone files) for perfect Hot Module Replacement.
* **Build Validation & ESLint**: Clean configuration passing ESLint checks with zero rules-of-hooks or compiler errors.
* **SPA Deployment Prep**: Automated `postbuild` script copying `index.html` to `404.html` to ensure client-side routing works flawlessly on static hosting environments (like Vercel, Netlify, or GitHub Pages).

---

## 🛠️ Technology Stack

* **Core Framework**: React 19 (Functional Components, Hooks)
* **Client-Side Routing**: React Router v7
* **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`), custom CSS animations
* **Build Pipeline**: Vite 7
* **Service Worker Generation**: `vite-plugin-pwa` (Workbox)
* **Slider Components**: Swiper 11
* **Icons**: React Icons (FontAwesome, Feather, etc.)

---

## 💻 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18 or higher recommended) and npm installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd techzonix
npm install
```

### 3. Development
Launch the hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build & Production Preview
To compile the production-ready code with PWA support and preview the output:
```bash
# Build the production bundle and generate sw.js
npm run build

# Host the local build to test PWA installability and service workers
npm run preview
```

### 5. Code Quality Check
Validate the codebase against the project lint rules:
```bash
npm run lint
```
