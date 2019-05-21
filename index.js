var _ = require('lodash')
var flatten = require('flat')

module.exports = function () {
  return function ({
    addUtilities, addComponents, addBase, addVariant,
    e, prefix, theme, variants, config,
  }) {
    const buildObjectFromTheme = themeKey => {
      const buildObject = ([ modifier, value ]) => [ modifier, { [themeKey]: value } ]
      const themeEntries = Object.entries(theme(themeKey, {})).map(entry => buildObject(entry))
      return _.fromPairs(themeEntries)
    }

    const pluginUtilities = {
        'blend': {
          'normal': { mixBlendMode: 'normal' },
          'multiply': { mixBlendMode: 'multiply' },
          'screen': { mixBlendMode: 'screen' },
          'overlay': { mixBlendMode: 'overlay' },
          'darken': { mixBlendMode: 'darken' },
          'lighten': { mixBlendMode: 'lighten' },
          'color-dodge': { mixBlendMode: 'color-dodge' },
          'color-burn': { mixBlendMode: 'color-burn' },
          'hard-light': { mixBlendMode: 'hard-light' },
          'soft-light': { mixBlendMode: 'soft-light' },
          'difference': { mixBlendMode: 'difference' },
          'exclusion': { mixBlendMode: 'exclusion' },
          'hue': { mixBlendMode: 'hue' },
          'saturation': { mixBlendMode: 'saturation' },
          'color': { mixBlendMode: 'color' },
          'luminosity': { mixBlendMode: 'luminosity' },
        },
        'bg-blend': {
          'normal': { backgroundBlendMode: 'normal' },
          'multiply': { backgroundBlendMode: 'multiply' },
          'screen': { backgroundBlendMode: 'screen' },
          'overlay': { backgroundBlendMode: 'overlay' },
          'darken': { backgroundBlendMode: 'darken' },
          'lighten': { backgroundBlendMode: 'lighten' },
          'color-dodge': { backgroundBlendMode: 'color-dodge' },
          'color-burn': { backgroundBlendMode: 'color-burn' },
          'hard-light': { backgroundBlendMode: 'hard-light' },
          'soft-light': { backgroundBlendMode: 'soft-light' },
          'difference': { backgroundBlendMode: 'difference' },
          'exclusion': { backgroundBlendMode: 'exclusion' },
          'hue': { backgroundBlendMode: 'hue' },
          'saturation': { backgroundBlendMode: 'saturation' },
          'color': { backgroundBlendMode: 'color' },
          'luminosity': { backgroundBlendMode: 'luminosity' },
        },
        'isolation': {
          'isolate': { isolation: 'isolate' },
          'auto': { isolation: 'auto' },
        }
    }

    Object.entries(pluginUtilities)
      .filter(([ modifier, values ]) => !_.isEmpty(values))
      .forEach(([ modifier, values ]) => {
        const variantName = Object.keys(Object.entries(values)[0][1])[0]
        const utilities = flatten(
          { [`.${e(`${modifier}`)}`]: values },
          { delimiter: '-', maxDepth: 2 },
        )

        addUtilities(utilities, variants(variantName, ['responsive']))
      })
  }
}
