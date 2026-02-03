## Project Summary
A high-end, minimalist designer portfolio for **Bristin Biju**, a branding and graphic design specialist based in the UAE. The website features a sleek "Dark Mode" aesthetic with bento-grid layouts, high-impact typography (Plus Jakarta Sans), and glassmorphism effects, inspired by the modern agency style.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, CSS Animations (tw-animate-css)
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans (Display/Sans), Inter (Sans-serif)

## Architecture
- `src/app/`: Core application routes and global styles.
- `src/components/sections/`: Modular page sections (Hero, Benefits, Capabilities, etc.) cloned and adapted for the portfolio.
- `public/`: Static assets and images.

## User Preferences
- **Owner**: Bristin Biju
- **Role**: Branding & Graphic Designer (4+ years experience)
- **Aesthetic**: Minimalist, bento-grid, high-impact, dark theme (Pure Black #000).
- **Typography**: Plus Jakarta Sans for headings and body.
- **Markets**: UAE, Europe, Africa.
- **Tools**: Adobe Creative Suite, AI-enhanced workflows.

## Project Guidelines
- **Bento Grid**: Use bento-style layouts for features and services.
- **Glassmorphism**: Utilize backdrop-blur and subtle borders for cards and navigation.
- **Accent**: Primary blue (#007CC0) for CTAs and highlights.
- **Precision**: Maintain obsessive detail in typography and layout.

## Common Patterns
- **Section Structure**: Each section is a self-contained component in `src/components/sections/`.
- **Global Styles**: Typography and color tokens are managed in `src/app/globals.css` using CSS variables and Tailwind layers.
- **Dark Mode**: Strict pure black (#000) background with #0A0A0A surface levels.
