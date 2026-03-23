

## Replace "Fagan's Woodwork" Text with Logo Image

The uploaded image is a brush-script handwritten logo reading "Fagan's Woodwork" in black on a white background.

### Approach: Use the image as a logo

Rather than trying to match the font (it's a hand-drawn brush script, not a standard web font), the cleanest approach is to use the image directly with CSS filters to adapt it to the site's colour scheme.

### Steps

1. **Copy the uploaded logo** to `src/assets/logo.jpeg`

2. **Update Navbar.tsx** (line 53-56):
   - Replace the text `<Link>` with an `<img>` tag importing the logo
   - Apply CSS `filter: invert(1)` to make the black text white (matching the dark theme)
   - Set height to ~28px on mobile, ~36px on desktop to fit the navbar
   - Keep the `<Link to="/">` wrapper

3. **Update FooterSection.tsx** (line 21-23):
   - Replace the `<h3>Fagan's Woodwork</h3>` text with the same logo image
   - Same invert filter and appropriate sizing (~28px height)

No other text on the site changes. Only the two places where "Fagan's Woodwork" appears as a brand name/logo element (navbar and footer) get the image treatment.

### Technical Detail

Using `filter: invert(1)` on a black-on-white image produces white-on-transparent appearance on the dark background. Combined with `brightness` adjustments, we can tint it to match the warm foreground colour if needed.

