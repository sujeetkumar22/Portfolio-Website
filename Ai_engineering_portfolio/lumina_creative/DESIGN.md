---
name: Lumina Creative
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bfcbae'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8a957a'
  outline-variant: '#404a34'
  surface-tint: '#84dd00'
  primary: '#ffffff'
  on-primary: '#1d3700'
  primary-container: '#97fc00'
  on-primary-container: '#417000'
  inverse-primary: '#3d6a00'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#97fc00'
  primary-fixed-dim: '#84dd00'
  on-primary-fixed: '#0f2000'
  on-primary-fixed-variant: '#2c5000'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1440px
  section-padding: 120px
  gutter: 24px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built for a high-impact, forward-thinking creative agency. It balances professional authority with a youthful, energetic edge through a high-contrast aesthetic. The visual identity is defined by expansive negative space, aggressive neon accents, and a "Pill-Modular" layout style that breaks traditional grid constraints.

The design movement is a hybrid of **High-Contrast Bold** and **Modern Minimalism**. It utilizes large, expressive typography and oversized containers to create a sense of scale and confidence. The emotional response is one of precision, innovation, and "digital-first" sophistication.

## Colors

The palette is strictly high-contrast to ensure maximum impact. 
- **Deep Black (#000000):** Serves as the primary canvas, creating a "limitless" depth that makes other elements pop.
- **Neon Green (#99FF00):** Used exclusively for high-priority calls to action, active states, and critical branding accents. It should be used sparingly but boldly.
- **Soft White (#F5F5F5):** Reserved for body text and secondary headings to maintain readability without the harshness of pure white.
- **Surface Neutrals:** Use deep grays (#0A0A0A to #1A1A1A) for subtle container differentiation and card backgrounds.

## Typography

The typography system relies on a "Technical-Humanist" pairing. **Space Grotesk** provides a futuristic, geometric edge for all headings and functional labels, emphasizing the agency's modern capabilities. **Inter** is used for body copy to provide a neutral, highly readable foundation that doesn't compete with the bold headlines.

Headlines should utilize tight letter spacing and aggressive sizing to command attention. Use the `label-caps` style for small descriptors or category tags above headlines to create a structured hierarchy.

## Layout & Spacing

This design system uses a **Fluid Pillar Grid**. While it follows a 12-column logic for content alignment, the visual weight is carried by wide, pill-shaped sections that span the full width of the container. 

- **Negative Space:** Sections must have significant vertical breathing room (120px+) to maintain a premium feel.
- **The Pillar Effect:** Large containers should use exaggerated rounded corners to create a soft, friendly counterpoint to the aggressive color palette.
- **Alignment:** Content is generally center-aligned for hero sections and left-aligned for informational blocks to maintain a professional, structured rhythm.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Glows** rather than traditional drop shadows.
- **Layering:** Elements are stacked using varying shades of near-black. A background might be #000000, while a floating card is #0A0A0A.
- **Neon Glow:** Critical elements (like primary buttons or active project cards) may feature a subtle, low-opacity outer glow using the primary Neon Green (#99FF00) to simulate a light-emissive surface.
- **Glassmorphism:** Use a heavy backdrop blur (20px-40px) with 10% opacity white overlays for sticky navigation bars to maintain context of the content scrolling beneath.

## Shapes

The shape language is defined by the **Pill Motif**. Sharp corners are strictly avoided.
- **Primary Containers:** Use the highest radius (`rounded-xl` or larger) to create "capsule" sections.
- **Interactive Elements:** Buttons and tags must be fully pill-shaped (rounded-full).
- **Media:** Photography and video embeds should follow the `rounded-lg` or `rounded-xl` logic to feel integrated into the soft-edged layout.

## Components

### Buttons
- **Primary:** Neon Green background, Black text, bold weight, pill-shaped. On hover, apply a slight scale up (1.05x).
- **Secondary/Ghost:** White border (1px), White text, no background. On hover, fill with White and change text to Black.

### Navigation
- A minimalist, fixed top bar. The active link state is represented by a pill-shaped background in either Neon Green or a semi-transparent White.

### Project Cards
- Large-scale cards with `rounded-xl` corners. 
- **Imagery:** Monochrome or desaturated by 80%. On hover, the image transitions to full color or gains a 20% Neon Green overlay.
- **Details:** Titles appear in `headline-md` at the bottom of the card or revealed on hover.

### Chips & Tags
- Small, pill-shaped containers with `label-caps` typography. Use these for categorizing projects or services.

### Form Inputs
- Deep gray backgrounds (#1A1A1A) with pill-shaped corners. Borders appear only on focus in Neon Green.

### Service Lists
- Large, interactive rows with thin dividers. Each row features a large number (e.g., 01, 02) in the primary color, with an arrow icon that rotates 45 degrees on hover.