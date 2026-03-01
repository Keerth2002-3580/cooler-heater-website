# Ravique Climate - Premium Corporate Website

A modern, premium corporate website for a London-based cooling and heating company built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal design with dark green theme, soft grays, and white
- **Responsive**: Mobile-first design that works on all devices
- **7 Pages**: Home, Products, Product Details, Services, Projects, About, Contact, FAQ
- **Interactive Components**: Tabs, filters, accordions, modals, carousels
- **Premium UI**: Rounded corners, smooth animations, subtle shadows
- **Mock Data**: Frontend-only with sample product data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom reusable UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd ravique-climate
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ravique-climate/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── products/            # Products listing & details
│   ├── projects/            # Projects showcase
│   ├── services/            # Services page
│   ├── layout.tsx           # Root layout with navbar & footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Layout components
│   │   ├── TopBar.tsx       # Top announcement bar
│   │   ├── Navbar.tsx       # Main navigation
│   │   └── Footer.tsx       # Footer with links
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Accordion.tsx
│       ├── Modal.tsx
│       └── Skeleton.tsx
├── data/
│   └── products.ts          # Mock product data
└── package.json
```

## Pages Overview

### Home (/)
- Hero section with Coolers/Heaters tabs
- Category cards
- Featured products carousel
- Why choose us section
- Testimonials
- WhatsApp CTA

### Products (/products)
- Advanced filters (category, price, brand, stock)
- Sort options
- Product grid with cards
- Responsive design

### Product Details (/products/[slug])
- Image gallery with thumbnails
- Detailed specifications
- Related products
- Quote buttons (WhatsApp, Email)

### Services (/services)
- Service cards (Installation, Maintenance, Repair, Inspection)
- Booking form
- Pricing information

### Projects (/projects)
- Project showcase with filters
- Residential/Commercial categories
- Before/After tags

### About (/about)
- Company story
- Statistics
- Core values
- Team members
- Certifications

### Contact (/contact)
- Contact form
- Contact information cards
- Map placeholder
- WhatsApp CTA

### FAQ (/faq)
- Searchable accordion
- Category filters
- 14+ common questions

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#1a4d2e',  // Dark green
    dark: '#0f2919',
    light: '#2d6a4f',
  },
}
```

### Products
Edit `data/products.ts` to add/modify products

### Contact Information
Update phone numbers, email, and address in:
- `components/layout/TopBar.tsx`
- `components/layout/Footer.tsx`
- `app/contact/page.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All forms are frontend-only (no backend integration)
- Images use Unsplash placeholders
- WhatsApp links use placeholder number (447000000000)
- Map is a placeholder - integrate Google Maps or similar
- No authentication or database required

## License

This is a demo project for portfolio purposes.
