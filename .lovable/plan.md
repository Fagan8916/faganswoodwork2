
Goal: Fix “Back to Portfolio” so it returns users to the Portfolio section (not just the top of Home) when leaving any `/gallery/:id` page.

Implementation plan

1) Confirm and preserve correct destination URLs
- Keep all “Back to Portfolio” links in `GalleryDetail.tsx` pointing to `/#gallery` (both normal and “Piece Not Found” states).
- Check that no stale `/portfolio` links remain anywhere in the app.

2) Fix route + hash scroll behavior globally
- Update `src/components/ScrollToTop.tsx` to use full location data (`pathname`, `hash`) instead of only `pathname`.
- New logic:
  - If URL contains a hash (example: `/#gallery`), find that element by ID and scroll it into view (with a small delay/retry so it works after route mount/render).
  - If no hash, keep existing behavior (`window.scrollTo(0,0)`).
- This ensures all hash-based section links work correctly from detail pages, not only this back button.

3) Make section links robust from non-home routes
- Update header/footer in-page links that currently use plain `#...` to route-aware links (`/#...`) so they work even when clicked from `/gallery/:id` or `/product/:id`.
- Files to align:
  - `src/components/Navbar.tsx`
  - `src/components/FooterSection.tsx`
- Result: “Portfolio” in nav/footer and “Back to Portfolio” all use the same reliable path+hash behavior.

4) Verify behavior
- From a gallery detail page:
  - Click “Back to Portfolio” and confirm landing at the `#gallery` section.
- Also verify nav/footer “Portfolio” links from detail pages jump to the same section.
- Confirm normal route transitions still scroll to top when no hash is present.

Technical details
- Root cause: `ScrollToTop` currently reacts only to `pathname` and always forces top scroll, ignoring hash anchors.
- Fix pattern:
  - `const { pathname, hash } = useLocation();`
  - In `useEffect`, branch by `hash`:
    - `document.getElementById(hash.replace("#",""))?.scrollIntoView(...)`
    - fallback to top scroll when missing.
- This keeps current UX conventions while restoring expected “Back to Portfolio” logic.
