# Task 8 — Typography Upgrade: Premium Fonts & Utilities

## Changes Summary

### 1. `src/app/globals.css`

#### Bricolage Grotesque Font (lines 30-36)
- Added new `@font-face` for **Bricolage Grotesque** (weights 300-800, variable font)
- Premium display font for hero-level typography

#### CSS Theme Variable (line 45)
- Added `--font-display-premium: 'Bricolage Grotesque', system-ui, sans-serif` to `@theme inline` block

#### Typography Utility Classes (lines 1430-1549)
- `.font-display-premium` — Bricolage Grotesque family
- `.text-display-hero` — Ultra-large hero text (Bricolage Grotesque, weight 700, line-height 1.0, letter-spacing -0.04em)
- `.text-display-section` — Section titles (Space Grotesk, weight 700, line-height 1.1, letter-spacing -0.025em)
- `.text-body-refined` — Refined body copy (Inter, weight 400, line-height 1.8, letter-spacing 0.01em)
- `.text-accent-serif` — Italic serif accent (DM Serif Display)
- `.text-micro-label` — 10px uppercase micro label
- `.text-label-sm` — 12px uppercase small label
- `.drop-cap::first-letter` — Gold drop cap for featured content
- `.quote-decorative::before` — Decorative serif quote marks
- `.text-gradient-hero` — Hero-specific gold gradient with 6s animation (300% background-size)
- `.font-mono-accent` — Monospace text for code/tech elements
- `.text-shimmer` — Subtle shimmer text effect with animation
- `@keyframes textShimmer` — Shimmer animation keyframes

### 2. `src/components/shared/SectionHeading.tsx`

- **Removed** inline `style={{ fontFamily: "'Space Grotesk', sans-serif" }}` from h2 (line 55)
- **Changed** `font-extrabold` → `font-bold`, `tracking-[-0.02em]` → `tracking-[-0.025em]`, added `text-display-section` class
- **Removed** `font-serif-accent` from highlighted text span (line 60)
- **Updated** description paragraph: `leading-[1.8]` → `leading-[1.85]`, added `text-body-refined` class (line 71)
- **Enhanced** sizeClasses: sm (lg: 2.5rem), md (lg: 3rem), lg (lg: 3.5rem), xl (lg: 4rem)

### 3. `src/components/pages/HomePage.tsx`

- **Hero h1** (line 554): Upgraded from `text-4xl...lg:text-[4.25rem]` to `text-5xl...xl:text-[5.5rem]`
- **Removed** inline `style={{ fontFamily }}` from hero h1
- **Changed** `font-extrabold` → `font-bold`, `leading-[1.05]` → `leading-[1.0]`, `tracking-tight` → `tracking-[-0.04em]`
- **Added** `text-display-hero` class for Bricolage Grotesque
- **Changed** first two lines from `text-gradient-gold animate-gradient-text` → `text-gradient-hero`
- **Hero subtitle** (line 564): Changed `text-muted-foreground` → `text-[rgba(245,245,245,0.65)]`, added `text-body-refined`

## QA
- ✅ ESLint: Zero errors
- ✅ Compilation: Clean, HTTP 200 responses
- ✅ All existing functionality preserved
- ✅ Space Grotesk weight 300-700 variable font left unchanged (already correct)
