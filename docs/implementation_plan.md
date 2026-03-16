# Implementation Plan - Interactive Site-Wide Animations

## Objective
Fix the scroll animations so that individual elements (cards, text, images) inside sections appear progressively and interactively on scroll, rather than entire sections appearing as a single faded block. We are using the D: drive for documents due to disk constraints.

## Proposed Changes

### 1. Remove Redundant Wrappers in Pages
- **`src/pages/Home.tsx`** (and other pages like `VinCheck.tsx`): 
  - Remove the outer `<FadeIn>` components that are currently wrapping entire sections (e.g., `<FadeIn><Features /></FadeIn>`). 
  - This double-wrapping prevents the internal staggered animations of the sections from triggering correctly. By removing the outer wrappers, the sections will handle their own scroll triggers dynamically.

### 2. Enhance Section-Level Animations
- **`src/components/Hero.tsx`**: Add `StaggerContainer` and `FadeIn` to the hero text block, search inputs, and feature bullets so they animate smoothly on load.
- **Section Components** (e.g., `HomeSections1.tsx`, `Features.tsx`): Verify and ensure they are properly using `FadeIn` for titles and `StaggerContainer` + `motion.div` for grid items/cards so they pop individually on scroll.

## Verification
- Run the dev server.
- Open the browser and scroll down the homepage.
- Confirm that section headers fade in first, followed sequentially by individual cards or text paragraphs, creating a cascading and deeply interactive "wow" effect.
