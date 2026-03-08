

## Plan: Reset Portfolio with Individual Pages per Uploaded Image

### Current State
- `src/lib/gallery.ts` contains 9 gallery items with placeholder images from product assets
- Each item links to a detail page at `/gallery/:id`

### Changes Required

**1. Update `src/lib/gallery.ts`**

Replace all existing gallery items with 10 new entries, one for each uploaded image:

| ID | Image | Placeholder Title |
|---|---|---|
| `log-slice-table` | IMG_9887.JPG | Log Slice Coffee Table |
| `river-side-table` | IMG_9888.JPG | River Side Table |
| `live-edge-round` | IMG_9889.JPG | Live Edge Round |
| `striped-end-grain` | IMG_9890.JPG | Striped End-Grain Board |
| `oak-end-grain-set` | IMG_9891.JPG | Oak End-Grain Set |
| `tri-wood-board` | IMG_9893.JPG | Tri-Wood Serving Board |
| `striped-serving-boards` | IMG_9895.JPG | Striped Serving Boards |
| `walnut-carving-boards` | IMG_9897.JPG | Walnut Carving Boards |
| `chevron-pattern-board` | IMG_9898.JPG | Chevron Pattern Board |

Each entry will have:
- Single image in the `images` array (you'll add more later)
- Generic placeholder description and specs
- Location set to "Ireland"
- No quote initially

**2. Copy Images to `src/assets/gallery/`**

Copy all 10 uploaded images into the project assets folder.

**3. No Changes to Detail Page**

`GalleryDetail.tsx` already supports variable-length image arrays and placeholder content.

### Technical Notes
- Images will be imported as ES6 modules for proper bundling
- Each piece gets a unique URL slug based on the piece type
- You can edit titles, descriptions, and add images directly in `gallery.ts`

