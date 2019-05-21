# Tailwind CSS Blend Mode Plugin

This plugin adds utilities to use blend-modes with Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using pnpm
pnpm install --save-dev tailwindcss-blend-mode

# Install using npm
npm install --save-dev tailwindcss-blend-mode

# Install using yarn
yarn add -D tailwindcss-blend-mode
```

## Usage

```js
// tailwind.config.js
{
  theme: {},  // no options to configure

  variants: { // all the following default to ['responsive']
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },

  plugins: [
    require('tailwindcss-blend-mode'), // no options to configure
  ],
}
```

```css
.blend-normal { mix-blend-mode: normal; }
.blend-multiply { mix-blend-mode: multiply; }
.blend-screen { mix-blend-mode: screen; }
.blend-overlay { mix-blend-mode: overlay; }
.blend-darken { mix-blend-mode: darken; }
.blend-lighten { mix-blend-mode: lighten; }
.blend-color-dodge { mix-blend-mode: color-dodge; }
.blend-color-burn { mix-blend-mode: color-burn; }
.blend-hard-light { mix-blend-mode: hard-light; }
.blend-soft-light { mix-blend-mode: soft-light; }
.blend-difference { mix-blend-mode: difference; }
.blend-exclusion { mix-blend-mode: exclusion; }
.blend-hue { mix-blend-mode: hue; }
.blend-saturation { mix-blend-mode: saturation; }
.blend-color { mix-blend-mode: color; }
.blend-luminosity { mix-blend-mode: luminosity; }

.bg-blend-normal { background-blend-mode: normal; }
.bg-blend-multiply { background-blend-mode: multiply; }
.bg-blend-screen { background-blend-mode: screen; }
.bg-blend-overlay { background-blend-mode: overlay; }
.bg-blend-darken { background-blend-mode: darken; }
.bg-blend-lighten { background-blend-mode: lighten; }
.bg-blend-color-dodge { background-blend-mode: color-dodge; }
.bg-blend-color-burn { background-blend-mode: color-burn; }
.bg-blend-hard-light { background-blend-mode: hard-light; }
.bg-blend-soft-light { background-blend-mode: soft-light; }
.bg-blend-difference { background-blend-mode: difference; }
.bg-blend-exclusion { background-blend-mode: exclusion; }
.bg-blend-hue { background-blend-mode: hue; }
.bg-blend-saturation { background-blend-mode: saturation; }
.bg-blend-color { background-blend-mode: color; }
.bg-blend-luminosity { background-blend-mode: luminosity; }

.isolation-isolate { isolation: isolate; }
.isolation-auto { isolation: auto; }
```
