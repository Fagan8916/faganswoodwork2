

## Mobile-Optimized Section Order

**Problem**: On mobile, users scroll through HeroSection → TestimonialSection → PhilosophySection before seeing any product images. That's too much text before visual content.

**Solution**: Use the existing `useIsMobile()` hook in `Index.tsx` to render sections in a different order on mobile.

### Desktop order (unchanged)
1. Hero
2. Testimonials
3. Philosophy
4. Product Showcase (Lazy Susan)
5. Available Now
6. Product Showcase (Boards)
7. Process → Trade → Gallery → Mailing List → Contact → Footer

### Mobile order
1. Hero
2. Product Showcase (Lazy Susan)
3. Available Now
4. Product Showcase (Boards)
5. Testimonials
6. Philosophy
7. Process → Trade → Gallery → Mailing List → Contact → Footer

### Implementation

**File: `src/pages/Index.tsx`**
- Import `useIsMobile` from `@/hooks/use-mobile`
- Conditionally render the section order based on `isMobile`
- All sections remain identical in content; only their position changes

This is a single-file change with no impact on individual component styling.

