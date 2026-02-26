# Brisa Consciente – Landing Page & Therapeutic Services
**Therapeutic Center | Nuxt 4 + Tailwind CSS**

---

## Project Overview

Brisa Consciente is a modern, high-performance landing page designed for a therapeutic center focused on emotional well-being. The project aims to present the center's identity through a clean, professional, and calming aesthetic.

Key features include:
- **Brand Identity:** Soft pastel color palette (greens and blues) to evoke tranquility.
- **Service Catalog:** Categorized services (Psychology, Law, Workshops) with dynamic filtering.
- **Professional Profiles:** Interactive team section with 3D flip cards and mobile-optimized carousels.
- **Direct Conversion:** Integrated WhatsApp scheduling with pre-filled messages.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop experiences.

---

## Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (SSG Mode)
- **Core Library:** [Vue 3](https://vuejs.org/) (Composition API with `<script setup>`)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS Variables
- **Icons:**
  - [Heroicons](https://heroicons.com/) (Vue version) for service features.
  - Custom SVGs for social media (Instagram, TikTok).
- **Build Tool:** Vite (Nuxt internal)
- **Deployment:** Static Site Generation (SSG) for cPanel/Shared Hosting.

---

## Project Structure

```bash
app/
  app.vue                       # Root layout and entry point
  components/
    AppNavbar.vue               # Sticky navbar with centered navigation and left-aligned logo
    HeroSection.vue             # Main welcome section
    MisionSection.vue           # Mission and core philosophy
    ValoresSection.vue          # Core values grid
    ProfesionalSection.vue      # Main specialist presentation
    ServiciosTitulo.vue         # Section header for services
    ServiciosCards.vue          # Filterable service grid (Psychology, Law, Workshops)
    EquipoSection.vue           # Team cards with 3D flip effect and mobile auto-scroll
    AppFooter.vue               # Footer with navigation, social links, and developer credits

assets/
  css/
    main.css                    # Tailwind directives + custom pastel palette variables

public/
  img/
    favicon.png                 # Optimized and centered browser tab icon
    logo1.png                   # Original white logo