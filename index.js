module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(
      {
        // Mix Blend Mode
        '.blend-normal': { mixBlendMode: 'normal' },
        '.blend-multiply': { mixBlendMode: 'multiply' },
        '.blend-screen': { mixBlendMode: 'screen' },
        '.blend-overlay': { mixBlendMode: 'overlay' },
        '.blend-darken': { mixBlendMode: 'darken' },
        '.blend-lighten': { mixBlendMode: 'lighten' },
        '.blend-color-dodge': { mixBlendMode: 'color-dodge' },
        '.blend-color-burn': { mixBlendMode: 'color-burn' },
        '.blend-hard-light': { mixBlendMode: 'hard-light' },
        '.blend-soft-light': { mixBlendMode: 'soft-light' },
        '.blend-difference': { mixBlendMode: 'difference' },
        '.blend-exclusion': { mixBlendMode: 'exclusion' },
        '.blend-hue': { mixBlendMode: 'hue' },
        '.blend-saturation': { mixBlendMode: 'saturation' },
        '.blend-color': { mixBlendMode: 'color' },
        '.blend-luminosity': { mixBlendMode: 'luminosity' },

        // Background Blend Mode
        '.bg-blend-normal': { backgroundBlendMode: 'normal' },
        '.bg-blend-multiply': { backgroundBlendMode: 'multiply' },
        '.bg-blend-screen': { backgroundBlendMode: 'screen' },
        '.bg-blend-overlay': { backgroundBlendMode: 'overlay' },
        '.bg-blend-darken': { backgroundBlendMode: 'darken' },
        '.bg-blend-lighten': { backgroundBlendMode: 'lighten' },
        '.bg-blend-color-dodge': { backgroundBlendMode: 'color-dodge' },
        '.bg-blend-color-burn': { backgroundBlendMode: 'color-burn' },
        '.bg-blend-hard-light': { backgroundBlendMode: 'hard-light' },
        '.bg-blend-soft-light': { backgroundBlendMode: 'soft-light' },
        '.bg-blend-difference': { backgroundBlendMode: 'difference' },
        '.bg-blend-exclusion': { backgroundBlendMode: 'exclusion' },
        '.bg-blend-hue': { backgroundBlendMode: 'hue' },
        '.bg-blend-saturation': { backgroundBlendMode: 'saturation' },
        '.bg-blend-color': { backgroundBlendMode: 'color' },
        '.bg-blend-luminosity': { backgroundBlendMode: 'luminosity' },

        // Isolate
        '.isolate': { isolation: 'isolate' },
        '.isolate-none': { isolation: 'auto' },
      },
      variants
    )
  }
}
