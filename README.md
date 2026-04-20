# sh4d0w121 | Technical Research Blog

A clean, minimalistic blog platform for cybersecurity research, CTF writeups, and technical deep dives.

## Features

- **Technical Reading Experience**: Optimized typography (Outfit & Inter) and spacious layout.
- **Markdown Powered**: Posts are written in Markdown with support for code blocks.
- **Developer Tools**: Syntax highlighting with `react-syntax-highlighter` and integrated copy-to-clipboard functionality.
- **Dynamic Content**: Auto-generated Table of Contents and tag-based filtering.
- **Dual Themes**: Native light and dark mode support with system preference detection.
- **Page Transitions**: Smooth, non-distracting animations using `motion`.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Content**: React Markdown + Rehype-Slug
- **Icons**: Lucide React

## Structure

```text
src/
├── components/   # Reusable UI elements
├── data/         # Blog post storage (posts.ts)
├── hooks/        # Theme and utility hooks
├── lib/          # Helper functions (cn utility)
├── pages/        # Main route components
└── types/        # TypeScript interfaces
```

## Setup

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

---

Built by **Pranil Gholap (sh4d0w121)**.
