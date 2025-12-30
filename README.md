# Artistic - Next.js Conversion

This project has been converted from a static HTML template to Next.js.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory (App Router)
  - `components/` - React components (Header, Footer, Preloader)
  - `layout.tsx` - Root layout with global styles and scripts
  - `page.tsx` - Home page
  - `globals.css` - Global CSS imports
- `public/` - Static assets
  - `images/` - Image files
  - `js/` - JavaScript files
  - `webfonts/` - Font files
- `styles/` - CSS files

## Conversion Notes

- HTML pages have been converted to Next.js pages/components
- Image paths updated from `images/` to `/images/`
- Links updated to use Next.js `Link` component
- CSS files moved to `styles/` directory
- JavaScript files moved to `public/js/` and loaded via Script component

## Remaining Tasks

The following pages still need to be converted:
- about
- services
- service-single
- blog
- blog-single
- projects
- project-single
- team
- team-single
- pricing
- testimonial
- image-gallery
- video-gallery
- faqs
- contact
- 404

You can create these pages in the `app/` directory following the same pattern as the home page.

