# KZ Lodge Luxe – Marketing Website

A modern, responsive single-page marketing website for **KZ Lodge**, built with a contemporary React stack.  
The project focuses on performance, clean UI, and maintainable structure, suitable for real-world deployment and future expansion.

---

## 🔗 Live Preview
> (Add link here when deployed – e.g. Vercel / Netlify)

---

## 🧠 Project Overview

This website showcases accommodation offerings, amenities, events, and contact information for KZ Lodge in Hammanskraal, South Africa.

Key goals:
- High-conversion landing experience
- Clean visual hierarchy
- Mobile-first responsiveness
- Scalable code structure for future features (bookings, galleries, CMS integration)

---

## 🛠️ Tech Stack

- **Vite** – fast development & build tooling
- **React** – component-based UI
- **TypeScript** – type safety & maintainability
- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – accessible, reusable UI components
- **Framer Motion** – animations and transitions
- **React Router** – client-side routing
- **TanStack Query** – data-fetching foundation (ready for API integration)

---

## 📁 Project Structure (Simplified)
src/
├── main.tsx # App entry point
├── app/
│ └── App.tsx # App providers & routing
├── pages/
│ ├── Home.tsx
│ └── NotFound.tsx
├── features/
│ └── landing/
│ ├── LandingPage.tsx
│ └── sections/
│ ├── Hero.tsx
│ ├── Amenities.tsx
│ ├── Experience.tsx
│ ├── Events.tsx
│ └── Testimonials.tsx
├── components/
│ ├── layout/
│ │ └── Footer.tsx
│ └── ui/ # shadcn-ui components
├── assets/
│ └── images

This structure separates:
- **routing (`pages`)**
- **features (`features`)**
- **shared UI & layout (`components`)**

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Setup

```sh
git clone <YOUR_REPO_URL>
cd kz-lodge-luxe
npm install
npm run dev

The app will run at: http://localhost:8080

Deployment

The project can be deployed easily on platforms such as:

Vercel

Netlify

Cloudflare Pages

Build command: npm run build

dist/


Design & Development Notes

Fully responsive layout

Component-based architecture

Asset handling via Vite (src/assets)

Alias imports configured (@/ → src/)

SEO-ready structure for future enhancement