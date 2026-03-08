

## Full Site Review

### Bugs / Navigation Issues Found

**1. Broken `<a href="#section">` links from sub-pages**
Multiple components use plain `<a href="#contact">` or `<a href="#philosophy">` instead of `<Link to="/#contact">`. These work fine on the homepage but **break when clicked from `/gallery/:id` or `/product/:id`** pages — they navigate to `/gallery/some-id#contact` (which doesn't exist) instead of `/#contact`.

Affected files:
- `HeroSection.tsx` — "Commission Your Piece" button (`href="#contact"`) and scroll indicator (`href="#philosophy"`)
- `ProductShowcaseLazySusan.tsx` — "View Available Timbers" (`href="#contact"`)
- `ProductShowcaseBoards.tsx` — "Design Your Board" (`href="#contact"`)
- `TradeSection.tsx` — "Request Trade Portfolio" (`href="#contact"`)
- `StickyMobileCTA.tsx` — "Commission Your Piece" (`href="#contact"`)
- `GalleryDetail.tsx` line 194 — "Commission a Similar Piece" (`href="/#contact"` as `<a>` not `<Link>`, causes full reload)

**Fix**: Convert all `<a href="#section">` to `<Link to="/#section">` across these components.

**2. ScrollToTop hash scrolling may fail on slow renders**
The 100ms timeout in `ScrollToTop.tsx` might not be enough if the homepage hasn't fully rendered when navigating from a sub-page. Should add a retry/observer pattern or increase the delay.

---

### Data / Content Issues

**3. Placeholder phone number**: ContactSection has `tel:+353000000000` — needs a real number or removal.

**4. "Details coming soon"**: 10 of 12 gallery items still have placeholder descriptions.

**5. Product images are recycled placeholders**: All 4 "Available Now" products reuse the same set of `product-1` through `product-9` images across different products. These aren't real product-specific photos.

**6. Contact form and mailing list don't persist data**: Both just simulate a timeout — no backend storage or email delivery.

**7. Related pieces logic is naive**: GalleryDetail always shows the first 3 other items, not pieces of the same type (e.g. showing boards when viewing a board).

---

### Suggestions for a Premium Buyer Experience

**A. Image quality and loading**
- Add `loading="lazy"` to all product/gallery images (currently only on GallerySection thumbnails)
- Consider progressive image loading with blur-up placeholders for the large hero and detail images
- Serve optimized/resized images rather than raw JPEGs from assets

**B. Buyer trust signals**
- Add a "Certified Provenance" or "Sustainability" badge/section — high-end buyers care about sourcing
- Include a brief "About the Maker" section with a photo — personal connection builds trust for artisan goods
- Add testimonials/reviews from previous buyers (the quote system exists in the data model but is barely used)

**C. Purchase flow improvements**
- The "Request to Purchase" button on product pages goes to the generic contact form — consider pre-filling the form with the product name so the buyer doesn't have to re-explain
- Add a WhatsApp or direct message option alongside email for immediacy
- Show "Sold" status on pieces that have been purchased to create urgency

**D. Navigation and UX**
- Add breadcrumbs on detail pages (e.g. "Home > Portfolio > Oak Carving Board") for orientation
- Make the "Related Pieces" section smarter — show items of the same type (boards with boards, lazy susans with lazy susans)
- Add a "Back to top" button on long pages

**E. Content and storytelling**
- Fill in the "Details coming soon" descriptions — for premium buyers, the story behind each piece is a major selling point
- Add video or 360-degree views of pieces where possible
- Consider a "Materials" page showcasing the different timbers used with descriptions of their character

