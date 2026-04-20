# Design System Document: Festive Heritage Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Raj Bari" (The Royal Estate)**
This design system rejects the "cookie-cutter" e-commerce template in favor of a high-end, editorial experience that feels like a physical Diwali invitation. We are not just selling papad; we are curating a festive tradition. 

The system breaks the rigid digital grid by utilizing **Intentional Asymmetry**. Imagine a traditional *Thali*—elements are arranged with a sense of organic balance, not robotic alignment. We use overlapping typography, bleeding imagery that breaks container boundaries, and a "Z-axis" depth strategy that mimics the layering of fine silk and gold leaf. This is a celebratory, warm, and joyful space where every scroll feels like a revelation of flavor.

---

## 2. Colors: The Palette of Celebration
The color strategy uses deep, light-absorbing reds and light-reflecting golds to create a "Glow from Within" effect.

### Surface Hierarchy & The "No-Line" Rule
To maintain a premium feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background shifts or tonal transitions.
- **Surface (Base):** `#310005` (The deep, dark essence of the brand).
- **Surface-Container-Low:** `#410008` (Used for subtle content grouping).
- **Surface-Container-Highest:** `#6B0F1A` (The primary maroon for hero sections and high-impact cards).
- **The Glass & Gradient Rule:** For floating navigation or product modals, use `surface_bright` (#71141e) at 80% opacity with a `24px` backdrop blur. This creates a "frosted ruby" effect.

### Signature Textures
Never use flat `Primary` (#ffb77d) for large areas. Apply a subtle linear gradient from `Primary` to `Primary_Container` (#542a00) at a 135-degree angle to simulate the sheen of metallic gold under candlelight.

---

## 3. Typography: The Editorial Voice
Our typography is a conversation between heritage and modernity. 

- **Display (Rozha One):** Our "Hero" voice. Use this for main headers. It should often be oversized, occasionally overlapping product photography to create a sense of depth.
- **Headline (Noto Serif):** Used for section titles. It provides an authoritative, premium weight that feels like a luxury food magazine.
- **Title (Plus Jakarta Sans):** For product names and navigational elements. Its modern geometry balances the decorative nature of the display fonts.
- **Body (Plus Jakarta Sans):** Optimized for readability. Use `body-lg` for product descriptions to ensure the "Warm Ivory" text is legible against the deep maroon backgrounds.
- **The Hindi Signature (Noto Sans Devanagari):** The tagline "त्योहार का स्वाद, हर दिन" should always be treated as a design element, often set in `Secondary` (Gold) to emphasize the brand’s roots.

---

## 4. Elevation & Depth: Tonal Layering
We move away from the "shadow-heavy" look of early 2010s UI, moving toward a more naturalistic, ambient depth.

- **The Layering Principle:** To lift a product card, do not use a shadow. Instead, place a `surface-container-highest` (#6B0F1A) card onto a `surface` (#310005) background. The change in "Maroon-ness" provides a natural, sophisticated lift.
- **Ambient Shadows:** Only use shadows for floating CTAs or "Quick View" modals. Use a `12%` opacity shadow colored with `#270003` (the deepest maroon) with a `48px` blur. This avoids a "dirty" grey look.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (#564241) at `15%` opacity. It should feel like a faint watermark, not a structural line.

---

## 5. Components

### Buttons (The "Saffron Pulse")
- **Primary:** High-contrast `Bright Saffron` (#FF8C00) with `on_primary` (#4d2600) text. Use `rounded-md` (0.75rem) to maintain a soft, welcoming feel. 
- **Secondary:** `Metallic Gold` (#E8C84A) ghost style with a `2px` border (the only exception to the no-line rule, treated as "Jewelry").
- **State Change:** On hover, primary buttons should scale 1.02x and increase the "glow" through a subtle outer bloom of saffron light.

### Cards (The "Gifting" Tile)
- **Visuals:** Cards must never have dividers. Use `surface_container_high` (#5b0210) for the card body. 
- **Image Treatment:** Product images should be "cut-outs" (PNGs) that bleed outside the card's top edge, creating a 3D effect.

### Input Fields
- **Style:** Underline-only style using `Antique Gold` (#C9A84C). The "Warm Ivory" text floats above. Focus states trigger a soft glow of the underline, mimicking a lit diya.

### Additional Component: "The Festive Ribbon"
- A horizontal scrolling marquee of the brand tagline or traditional motifs (Mandala patterns) using `tertiary` (#e4c447) at low opacity, acting as a textural divider between sections.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as "Maroon Space":** Embrace the deep, dark background. It makes the gold and saffron "pop" like a Diwali night sky.
- **Asymmetric Layouts:** Place a product image on the left, but stagger the descriptive text slightly lower on the right.
- **High-Contrast Typography:** Pair a very large Rozha One headline with a very small, widely-spaced Plus Jakarta Sans label.

### Don't:
- **Don't use pure black (#000000) or pure white (#FFFFFF):** These break the "festive warmth." Use the defined Maroons and Ivories.
- **Don't use sharp corners:** Avoid `none` or `sm` rounding. Use `md` and `lg` to keep the interface feeling organic and "handmade" like a papad.
- **Don't use standard list dividers:** Use a change in background tint or simply 48px–64px of vertical breathing room.