# AGENTS.md - Guide for AI Coding Agents

This document provides essential information for AI agents working in this Next.js 16 portfolio codebase.

## Project Overview

**Framework**: Next.js 16.0.10 with React 19.2.0 using App Router  
**Language**: TypeScript (strict mode)  
**Styling**: Tailwind CSS v4.1.9 with CSS variables and OKLCH color space  
**Package Manager**: pnpm  
**UI Library**: shadcn/ui with Radix UI components (New York style)  
**Icons**: Lucide React  

## Essential Commands

```bash
# Development
pnpm dev              # Start development server on localhost:3000
pnpm build            # Build for production (TypeScript errors ignored)
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint (no config file found, uses Next.js defaults)
```

**Important**: No testing framework is currently configured. Testing setup would be required for test commands.

## Code Structure & Organization

```
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global Tailwind styles with CSS variables
│   ├── layout.tsx      # Root layout with fonts and analytics
│   ├── page.tsx        # Home page
│   └── portfolio.css   # Custom portfolio styles
├── components/         # React components
│   ├── portfolio/      # Feature-specific components
│   └── theme-provider.tsx # Theme wrapper
├── lib/               # Utilities
│   └── utils.ts       # cn() function for className merging
└── public/            # Static assets
```

## Code Style Guidelines

### TypeScript & Types
- **Strict mode enabled**: All code must be type-safe
- **Interface definitions**: Use TypeScript interfaces for component props
- **Path aliases**: `@/*` maps to root directory for imports

### Component Patterns
```typescript
// Standard component structure
interface ComponentProps {
  property: string;
  optionalProperty?: number;
}

export default function Component({
  property,
  optionalProperty = defaultValue,
}: ComponentProps) {
  return <div>{property}</div>;
}
```

### Import Conventions
```typescript
// Path alias imports
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// External imports
import * as React from 'react';
import { type ThemeProviderProps } from 'next-themes';
```

### Client Components
- Add `"use client";` directive at the top of interactive components
- Default export for components
- Use semantic HTML elements (`<article>`, `<section>`, etc.)

### Styling Conventions
- **Tailwind classes**: Use utility-first approach
- **CSS variables**: All colors defined in `app/globals.css` with OKLCH
- **Theme support**: Dark/light themes via next-themes
- **Class merging**: Use `cn()` utility for conditional classes

```typescript
// Example styling pattern
const className = cn(
  "base-class",
  isActive && "active-class",
  className // allow override via props
);
```

### File Naming
- **Components**: kebab-case (`HeroSection.tsx`, `CardGrid.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Pages**: `page.tsx`, `layout.tsx`

## CSS Variables & Theme System

### Color System (OKLCH)
All colors use OKLCH color space for better accessibility:
- `--background`, `--foreground` for main colors
- `--primary`, `--secondary`, `--accent` for UI elements
- `--muted`, `--destructive` for states
- Theme switching handled by next-themes

### Custom CSS
- Portfolio-specific styles in `app/portfolio.css`
- Mobile-first responsive design
- CSS variables for consistent spacing and colors

## Build Configuration

### Next.js Config (next.config.mjs)
- TypeScript errors are ignored in builds (`ignoreBuildErrors: true`)
- Images are unoptimized (`unoptimized: true`)

### TypeScript Config
- Strict mode enabled
- Path aliases: `@/*` → `./`
- Target: ES6

## shadcn/ui Integration

### Configuration
- **Style**: New York
- **Icons**: Lucide React
- **CSS Variables**: Enabled with Tailwind
- **Component aliases**: 
  - `@/components/ui` for shadcn components
  - `@/lib/utils` for utilities
  - `@/hooks` for custom hooks

### Adding Components
When adding new shadcn/ui components, use:
```bash
npx shadcn@latest add [component-name]
```

## Development Workflow

### Getting Started
1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm dev`
3. Build for production: `pnpm build`

### Code Quality
- Run `pnpm lint` before committing
- TypeScript errors are ignored in builds but should be fixed in development
- No prettier configuration found - use consistent formatting

### Common Patterns
- **Form handling**: React Hook Form with Zod validation
- **State management**: React hooks and context
- **Analytics**: Vercel Analytics integrated
- **Animation**: tailwindcss-animate and tw-animate-css

## Testing

**Currently no testing framework is configured**. If you need to add tests:

1. Choose a testing framework (Jest, Vitest, etc.)
2. Install testing dependencies
3. Configure test setup
4. Add test scripts to package.json
5. Update this AGENTS.md with test commands

## Important Notes

- This is a portfolio website focused on showcasing frontend development skills
- Mobile-first responsive design is crucial
- Accessibility should be prioritized (semantic HTML, ARIA labels)
- Dark/light theme support is required for all components
- All new components should be theme-aware
- CSS variables should be used for consistent theming

## AI Agent Guidelines

When working in this codebase:
1. Follow the established TypeScript and component patterns
2. Use existing utility functions (`cn()`) and components
3. Maintain consistency with shadcn/ui patterns
4. Ensure all new code is theme-compatible
5. Use semantic HTML and accessibility best practices
6. Test both light and dark themes for UI changes
7. Follow kebab-case file naming for components
8. Use path aliases (`@/*`) for imports