# Mimic

Mimic is a professional web design and frontend implementation project created
for **Pursue Studio**, a web design studio. The responsive product landing page
presents a synthetic-data platform for modern machine-learning teams through a
grid-led editorial interface.

![Mimic hero artwork](public/imagery/hero-art.png)

## Project context

This repository represents professional studio work produced for Pursue Studio.
The design and implementation are structured as production-oriented work, with a deliberate visual system, responsive behavior, reusable sections, and maintainable
frontend architecture.

## Highlights

- Responsive landing experience with desktop and mobile navigation
- Grid-aligned layout built around a shared, breakpoint-aware spacing system
- Local Mimic, partner, overview, and testimonial assets
- Animated hero, feature cards, pipeline panels, and testimonials
- Product overview for data generation, model training, and compliance
- Interactive FAQ, comparison table, enterprise section, and closing CTA
- Strict TypeScript configuration and production-ready Next.js build pipeline

## Tech stack

| Layer            | Technology                                  |
| ---------------- | ------------------------------------------- |
| Framework        | Next.js 16.2 with the App Router            |
| UI runtime       | React 19.2                                  |
| Language         | TypeScript                                  |
| Styling          | Tailwind CSS 4 and custom CSS design tokens |
| Motion           | GSAP, `@gsap/react`, and ScrollTrigger      |
| UI foundations   | Radix UI and shadcn                         |
| Images and fonts | `next/image` and `next/font`                |
| Code quality     | ESLint with the Next.js configuration       |

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm

### Installation

```bash
git clone https://github.com/Aymen-BSL/mimic.git
cd mimic
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server supports Fast Refresh, so changes under `app/`,
`components/`, and `public/` appear as you work.

## Available scripts

| Command         | Purpose                                             |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Start the local Turbopack development server        |
| `npm run build` | Create and type-check an optimized production build |
| `npm run start` | Serve the production build                          |
| `npm run lint`  | Run ESLint across the project                       |

## Page composition

The home page is assembled in `app/page.tsx` from focused landing-section
components:

1. Hero and responsive navigation
2. Partner logo bar
3. Product overview
4. ML pipeline features
5. Traditional-data comparison
6. Enterprise capabilities
7. Customer testimonials
8. Frequently asked questions
9. Closing CTA and footer

Each section is intentionally isolated in an `app/landing-*.tsx` file, keeping
content, layout, and animation behavior easy to find and update.

## Grid system

The visual rhythm is controlled by CSS variables in `app/globals.css`:

| Breakpoint         | Grid cell |
| ------------------ | --------: |
| Mobile             |    `52px` |
| `640px` and above  |    `64px` |
| `1024px` and above |    `78px` |

Independent sections use a three-cell gap through `--gap`. On desktop, the
content column is `1170px` wide—exactly 15 grid cells. The hero, partner rows,
and overview heights are also derived from `--cell`, ensuring their borders
land on the background grid instead of drifting between lines.

When changing vertical spacing, prefer whole-cell calculations such as
`calc(3 * var(--cell))` rather than unrelated fixed pixel values.

## Project structure

```text
app/
├── layout.tsx                 Root metadata, fonts, and document layout
├── page.tsx                   Landing-page composition and section spacing
├── globals.css                Design tokens, grid rhythm, and shared styles
├── frame-shell.tsx            Framed section surface and corner markers
└── landing-*.tsx              Individual landing-page sections
components/
└── grid-background.tsx        Responsive page-wide grid renderer
lib/
└── utils.ts                   Shared class-name utility
public/
├── imagery/                   Hero and testimonial imagery
├── logos/                     Mimic and partner SVG logos
└── overview/                  Overview background and feature icons
```

## Customization

- Update page copy and section content in the relevant `app/landing-*.tsx`
  component.
- Adjust colors, typography, grid sizes, and shared surfaces in
  `app/globals.css`.
- Change the order or spacing of sections in `app/page.tsx`.
- Replace brand assets in `public/logos/`, overview media in
  `public/overview/`, and photography in `public/imagery/`.
- Keep intrinsic image dimensions in sync with their `next/image` declarations
  when replacing SVG assets.

## Production

Create and serve a production build locally:

```bash
npm run build
npm run start
```

The project can be deployed to Vercel or any platform that supports the Next.js
Node.js runtime. Builds require network access for the Geist fonts loaded
through `next/font`.
