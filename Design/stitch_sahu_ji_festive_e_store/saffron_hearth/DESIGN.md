# Design System Strategy: The Hearthside Editorial

## 1. Overview & Creative North Star
This design system is built upon the **"Hearthside Editorial"** North Star. We are moving away from the generic "e-commerce template" look to create a digital experience that feels like a high-quality, modern community cookbook. It is grounded, honest, and tactile—capturing the essence of a trusted neighbor’s kitchen while maintaining the sophisticated clarity of a premium editorial publication.

The system breaks the "standard grid" through **Rhythmic Asymmetry**. By utilizing generous whitespace and intentional overlapping of text and imagery, we evoke the feeling of a hand-laid kitchen table. This isn't just a store; it’s an invitation into a home.

---

## 2. Color & Tonal Depth
Our palette is rooted in the kitchen: the vibrant stain of saffron and the golden glow of turmeric. To elevate this beyond a standard "flat" look, we use a sophisticated layering of off-whites and warm neutrals.

### The "No-Line" Hierarchy
While the brand utilizes a signature 1px border for specific tactical elements, global sectioning is achieved through **Background Color Shifts**. 
- **Rule:** Never use a line to separate the Header from the Hero, or the Hero from the Body. Use transitions between `background` (#f9f9f6) and `surface-container-low` (#f4f4f1) to define space.

### Surface Tiering
Instead of shadows, we stack "Paper on Paper."
*   **Base Layer:** `background` (#f9f9f6) – The kitchen counter.
*   **Content Layer:** `surface-container-lowest` (#ffffff) – The clean plate or parchment paper.
*   **Interactive Layer:** `primary-container` (#f97316) – The focal point (Saffron).

### The "Glass & Spice" Exception
To add a touch of "Senior Director" polish, floating elements (like a "Cart" fab or a "Language Toggle") should use **Glassmorphism**. Apply `surface` with 80% opacity and a `backdrop-filter: blur(12px)`. This allows the warm saffron and turmeric tones to peek through, making the UI feel integrated and airy.

---

## 3. Typography: The Bilingual Rhythm
Typography is our primary tool for authority. We mix the serif-like weight of Tiro Devanagari with the geometric honesty of Poppins.

*   **Display (Tiro Devanagari Hindi / Newsreader):** Used for big, soulful headlines. It should feel "inked" onto the page. `display-lg` is your primary tool for storytelling.
*   **Body (Poppins / Noto Sans Devanagari):** Functional, clean, and highly readable. Set with generous line-height (1.6) to ensure the "Airy" brand feel.
*   **The Bilingual Rule:** Hindi and English should never feel like an afterthought. Headlines should often be stacked—Hindi as the dominant `headline-lg`, with an English sub-headline in `title-sm` Warm Grey (#78716C).

---

## 4. Elevation & Depth
We reject the heavy drop-shadows of 2010. Our depth is "Ambient" and "Tonal."

### Tonal Layering
Depth is achieved by nesting. A `surface-container-lowest` (White) card sitting on a `surface-container` (#eeeeeb) section creates a natural lift. This mimics the way a physical packet of papad sits on a wooden table.

### The "Ghost Border"
The user requested 1px borders. To keep this high-end, we use **Ghost Borders**. 
- **Specification:** Use `outline-variant` (#e0c0b1) at 40% opacity. 
- **Intent:** The border should feel like a light pencil sketch—enough to define a boundary, but light enough to let the layout breathe. 

### Ambient Shadows (Floating Only)
Only use shadows for elements that truly "float" (Modals/Popovers).
- **Value:** `0px 12px 32px rgba(28, 25, 23, 0.06)`. 
- **Color:** The shadow is never black; it is a tinted version of `on-surface` (#1a1c1b) to mimic natural room light.

---

## 5. Components

### Buttons: The Tactile Touch
*   **Primary:** Saffron (`primary`) background, White text. **Radius: 6px.** No shadow. On hover, shift to `on-primary-fixed-variant` (#783200) for a "toasted" effect.
*   **Secondary:** 1px Ghost Border (`outline-variant`), Turmeric (`secondary`) text.
*   **Tertiary:** Text only in `primary`. Used for "Learn More" or "View All."

### Cards: The Product Showcase
*   **Style:** White background (`surface-container-lowest`), 1px Ghost Border, **8px corner radius.**
*   **Layout:** No divider lines. Use `1.5rem` (xl) internal padding. Separate product name from price using vertical whitespace (12px) and a font weight shift, not a line.

### Chips: Ingredient & Tagging
*   **Style:** `surface-container-high` (#e8e8e5) background. 
*   **Interaction:** On selection, they turn Saffron (`primary-container`) with `on-primary-container` (#582200) text.

### Input Fields: The Honest Form
*   **Style:** Underline-only or 1px Ghost Border. 
*   **Labeling:** Labels should use `label-md` in Warm Grey (#78716C), positioned with generous breathing room above the input.

---

## 6. Do’s and Don’ts

### Do:
*   **Do use asymmetric margins.** Allow an image of papad to bleed off the right edge of the screen while text remains centered.
*   **Do embrace "The Breath."** If you think there is enough whitespace, add 20% more.
*   **Do use Bilingual stacking.** "ताज़गी (Freshness)" creates a visual texture that English-only layouts lack.

### Don't:
*   **Don't use 100% black.** Always use Near-Black (#1C1917) for text to keep the "warmth."
*   **Don't use divider lines.** If you need to separate content, use a 32px gap or a subtle background color shift to `surface-container-low`.
*   **Don't use sharp corners.** Everything must have a minimum of 6px radius to maintain the "approachable neighbor" feel.
*   **Don't use gradients.** Our colors are honest; they don't need to hide behind digital effects.