---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#8dcdff'
  on-secondary: '#00344f'
  secondary-container: '#00affe'
  on-secondary-container: '#003f5f'
  tertiary: '#ffe7e5'
  on-tertiary: '#68000a'
  tertiary-container: '#ffc1bc'
  on-tertiary-container: '#b50019'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#cae6ff'
  secondary-fixed-dim: '#8dcdff'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#004b70'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930012'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
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
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 48px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system is engineered for a high-performance AI portfolio, merging the clinical precision of a laboratory with the immersive depth of high-end consumer technology. The personality is "Sophisticated Futurist"—intellectual, efficient, and slightly avant-garde. 

The aesthetic leverages **Minimalism** with a heavy influence of **Glassmorphism**. By utilizing a deep, monochromatic base layered with luminous accents, we evoke the feeling of a sophisticated IDE or a premium command center. High-tech aesthetics are achieved through thin lines, precise alignment, and the strategic use of "glow" as a signifier of activity and data flow. The UI should feel as if it is powered by the very models the engineer builds.

## Colors

The palette is anchored in a foundation of absolute and near-absolute blacks to maximize contrast and focus. 

- **Primary & Secondary:** We use a dual-tone cyan/blue spectrum (#00E5FF and #00B0FF) to represent "Intelligence." These colors are reserved for interactive elements, data visualizations, and subtle glow effects.
- **Tertiary:** A high-vibrancy red (#E60023) is used with extreme restraint, reserved only for critical errors or "system-level" warnings, maintaining the professional gravity of the portfolio.
- **Neutral Surface:** The background is set to a deep charcoal (#111111), providing a softer, more premium feel than pure hex black, while maintaining perfect legibility for white (#FFFFFF) typography.

## Typography

Typography is a mix of utilitarian precision and geometric flair. 

- **Space Grotesk** is utilized for headlines to provide a subtle "tech" edge. Its geometric construction mirrors the logic of engineering. 
- **Inter** handles all functional and body copy. It is selected for its exceptional legibility at small sizes and its neutral, systematic character. 

Hierarchy is established through weight and scale rather than decorative shifts. Large-scale headlines should use tighter letter-spacing for a modern, "impactful" look, while labels and metadata utilize uppercase tracking to enhance scannability.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is centered on "intentional breathing room," using generous vertical margins to separate distinct project case studies and technical sections.

Elements should align to an 8px grid to ensure mathematical consistency. Navigation and core UI elements use a fixed-width container to maintain a clean vertical line through the portfolio, while background effects and imagery may bleed to the edge of the viewport to create depth.

## Elevation & Depth

This design system uses **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows. Depth is communicated through surface brightness: the further "back" an element is, the darker it appears. 

- **Base Layer:** #111111.
- **Surface Layer:** Semi-transparent (white at 4-8% opacity) with a 20px backdrop blur to create a frosted glass effect.
- **Luminescence:** Interactive elements utilize a `0 0 20px rgba(0, 229, 255, 0.3)` glow instead of a shadow, suggesting light emission from the component itself.
- **Dividers:** 1px solid lines with low opacity (10-15%) are used to define structure without adding visual bulk.

## Shapes

The shape language is sharp and precise. A **Soft** roundedness (0.25rem) is applied to most UI components to keep them from feeling aggressive, while maintaining a sleek, architectural feel. 

Large cards and modal containers may use slightly more radius (0.5rem) to differentiate them from smaller buttons or tags. For decorative elements or AI-generated data points, circular "pill" shapes are acceptable, but the overall geometry of the portfolio remains rectangular and grounded.

## Components

- **Buttons:** Primary buttons feature a solid #00E5FF background with black text. Secondary buttons use a "Ghost" style—a 1px border with a subtle hover glow.
- **Cards:** Project cards utilize the Glassmorphism style with a very thin (1px) white-at-10% border. On hover, the border color transitions to the Primary cyan.
- **Chips/Tags:** Used for tech stacks (e.g., "Python", "TensorFlow"). These are small, dark-grey capsules with monospaced text to emphasize the technical nature.
- **Input Fields:** Minimalist lines. Only the bottom border is visible by default; on focus, the border becomes Primary cyan with a subtle upward glow.
- **Data Visualizers:** Custom components like accuracy graphs or neural net visualizations should use thin vector lines in Primary and Secondary colors to maintain the "AI Engineering" aesthetic.
- **Glow Accents:** Use radial gradients in the background behind key projects to create a "spotlight" effect, drawing the eye to high-impact work.