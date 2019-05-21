const _ = require('lodash')

const plugin = require('./index.js')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

// const defaultConfig = require('tailwindcss/defaultConfig')
const generatePluginCss = (testConfig = {}, pluginOptions = {}) => {
  const sandboxConfig = {
    theme: { screens: { 'sm': '640px' } },
    corePlugins: false,
    plugins: [ plugin(pluginOptions) ],
  }
  const postcssPlugins =[
    tailwindcss(_.merge(sandboxConfig, testConfig)),
  ]

  return postcss(postcssPlugins)
    .process('@tailwind utilities', { from: undefined })
    .then(result => result.css)
}

expect.extend({ toMatchCss: require('jest-matcher-css') })

test('generates default utilities and responsive variants', () => {
  const testConfig = {}
  const expectedCss = `
    .blend-normal { mix-blend-mode: normal }
    .blend-multiply { mix-blend-mode: multiply }
    .blend-screen { mix-blend-mode: screen }
    .blend-overlay { mix-blend-mode: overlay }
    .blend-darken { mix-blend-mode: darken }
    .blend-lighten { mix-blend-mode: lighten }
    .blend-color-dodge { mix-blend-mode: color-dodge }
    .blend-color-burn { mix-blend-mode: color-burn }
    .blend-hard-light { mix-blend-mode: hard-light }
    .blend-soft-light { mix-blend-mode: soft-light }
    .blend-difference { mix-blend-mode: difference }
    .blend-exclusion { mix-blend-mode: exclusion }
    .blend-hue { mix-blend-mode: hue }
    .blend-saturation { mix-blend-mode: saturation }
    .blend-color { mix-blend-mode: color }
    .blend-luminosity { mix-blend-mode: luminosity }

    .bg-blend-normal { background-blend-mode: normal }
    .bg-blend-multiply { background-blend-mode: multiply }
    .bg-blend-screen { background-blend-mode: screen }
    .bg-blend-overlay { background-blend-mode: overlay }
    .bg-blend-darken { background-blend-mode: darken }
    .bg-blend-lighten { background-blend-mode: lighten }
    .bg-blend-color-dodge { background-blend-mode: color-dodge }
    .bg-blend-color-burn { background-blend-mode: color-burn }
    .bg-blend-hard-light { background-blend-mode: hard-light }
    .bg-blend-soft-light { background-blend-mode: soft-light }
    .bg-blend-difference { background-blend-mode: difference }
    .bg-blend-exclusion { background-blend-mode: exclusion }
    .bg-blend-hue { background-blend-mode: hue }
    .bg-blend-saturation { background-blend-mode: saturation }
    .bg-blend-color { background-blend-mode: color }
    .bg-blend-luminosity { background-blend-mode: luminosity }

    .isolation-isolate { isolation: isolate }
    .isolation-auto { isolation: auto }

    @media (min-width: 640px) {
      .sm\\:blend-normal { mix-blend-mode: normal }
      .sm\\:blend-multiply { mix-blend-mode: multiply }
      .sm\\:blend-screen { mix-blend-mode: screen }
      .sm\\:blend-overlay { mix-blend-mode: overlay }
      .sm\\:blend-darken { mix-blend-mode: darken }
      .sm\\:blend-lighten { mix-blend-mode: lighten }
      .sm\\:blend-color-dodge { mix-blend-mode: color-dodge }
      .sm\\:blend-color-burn { mix-blend-mode: color-burn }
      .sm\\:blend-hard-light { mix-blend-mode: hard-light }
      .sm\\:blend-soft-light { mix-blend-mode: soft-light }
      .sm\\:blend-difference { mix-blend-mode: difference }
      .sm\\:blend-exclusion { mix-blend-mode: exclusion }
      .sm\\:blend-hue { mix-blend-mode: hue }
      .sm\\:blend-saturation { mix-blend-mode: saturation }
      .sm\\:blend-color { mix-blend-mode: color }
      .sm\\:blend-luminosity { mix-blend-mode: luminosity }

      .sm\\:bg-blend-normal { background-blend-mode: normal }
      .sm\\:bg-blend-multiply { background-blend-mode: multiply }
      .sm\\:bg-blend-screen { background-blend-mode: screen }
      .sm\\:bg-blend-overlay { background-blend-mode: overlay }
      .sm\\:bg-blend-darken { background-blend-mode: darken }
      .sm\\:bg-blend-lighten { background-blend-mode: lighten }
      .sm\\:bg-blend-color-dodge { background-blend-mode: color-dodge }
      .sm\\:bg-blend-color-burn { background-blend-mode: color-burn }
      .sm\\:bg-blend-hard-light { background-blend-mode: hard-light }
      .sm\\:bg-blend-soft-light { background-blend-mode: soft-light }
      .sm\\:bg-blend-difference { background-blend-mode: difference }
      .sm\\:bg-blend-exclusion { background-blend-mode: exclusion }
      .sm\\:bg-blend-hue { background-blend-mode: hue }
      .sm\\:bg-blend-saturation { background-blend-mode: saturation }
      .sm\\:bg-blend-color { background-blend-mode: color }
      .sm\\:bg-blend-luminosity { background-blend-mode: luminosity }

      .sm\\:isolation-isolate { isolation: isolate }
      .sm\\:isolation-auto { isolation: auto }
    }
  `

  return generatePluginCss(testConfig).then(css => expect(css).toMatchCss(expectedCss))
})

test('variants can be customized', () => {
  const testConfig = {
    variants: {
      mixBlendMode: ['hover'],
      backgroundBlendMode: ['focus'],
      isolation: ['active'],
    },
  }
  const expectedCss = `
    .blend-normal { mix-blend-mode: normal }
    .blend-multiply { mix-blend-mode: multiply }
    .blend-screen { mix-blend-mode: screen }
    .blend-overlay { mix-blend-mode: overlay }
    .blend-darken { mix-blend-mode: darken }
    .blend-lighten { mix-blend-mode: lighten }
    .blend-color-dodge { mix-blend-mode: color-dodge }
    .blend-color-burn { mix-blend-mode: color-burn }
    .blend-hard-light { mix-blend-mode: hard-light }
    .blend-soft-light { mix-blend-mode: soft-light }
    .blend-difference { mix-blend-mode: difference }
    .blend-exclusion { mix-blend-mode: exclusion }
    .blend-hue { mix-blend-mode: hue }
    .blend-saturation { mix-blend-mode: saturation }
    .blend-color { mix-blend-mode: color }
    .blend-luminosity { mix-blend-mode: luminosity }

    .hover\\:blend-normal:hover { mix-blend-mode: normal }
    .hover\\:blend-multiply:hover { mix-blend-mode: multiply }
    .hover\\:blend-screen:hover { mix-blend-mode: screen }
    .hover\\:blend-overlay:hover { mix-blend-mode: overlay }
    .hover\\:blend-darken:hover { mix-blend-mode: darken }
    .hover\\:blend-lighten:hover { mix-blend-mode: lighten }
    .hover\\:blend-color-dodge:hover { mix-blend-mode: color-dodge }
    .hover\\:blend-color-burn:hover { mix-blend-mode: color-burn }
    .hover\\:blend-hard-light:hover { mix-blend-mode: hard-light }
    .hover\\:blend-soft-light:hover { mix-blend-mode: soft-light }
    .hover\\:blend-difference:hover { mix-blend-mode: difference }
    .hover\\:blend-exclusion:hover { mix-blend-mode: exclusion }
    .hover\\:blend-hue:hover { mix-blend-mode: hue }
    .hover\\:blend-saturation:hover { mix-blend-mode: saturation }
    .hover\\:blend-color:hover { mix-blend-mode: color }
    .hover\\:blend-luminosity:hover { mix-blend-mode: luminosity }

    .bg-blend-normal { background-blend-mode: normal }
    .bg-blend-multiply { background-blend-mode: multiply }
    .bg-blend-screen { background-blend-mode: screen }
    .bg-blend-overlay { background-blend-mode: overlay }
    .bg-blend-darken { background-blend-mode: darken }
    .bg-blend-lighten { background-blend-mode: lighten }
    .bg-blend-color-dodge { background-blend-mode: color-dodge }
    .bg-blend-color-burn { background-blend-mode: color-burn }
    .bg-blend-hard-light { background-blend-mode: hard-light }
    .bg-blend-soft-light { background-blend-mode: soft-light }
    .bg-blend-difference { background-blend-mode: difference }
    .bg-blend-exclusion { background-blend-mode: exclusion }
    .bg-blend-hue { background-blend-mode: hue }
    .bg-blend-saturation { background-blend-mode: saturation }
    .bg-blend-color { background-blend-mode: color }
    .bg-blend-luminosity { background-blend-mode: luminosity }

    .focus\\:bg-blend-normal:focus { background-blend-mode: normal }
    .focus\\:bg-blend-multiply:focus { background-blend-mode: multiply }
    .focus\\:bg-blend-screen:focus { background-blend-mode: screen }
    .focus\\:bg-blend-overlay:focus { background-blend-mode: overlay }
    .focus\\:bg-blend-darken:focus { background-blend-mode: darken }
    .focus\\:bg-blend-lighten:focus { background-blend-mode: lighten }
    .focus\\:bg-blend-color-dodge:focus { background-blend-mode: color-dodge }
    .focus\\:bg-blend-color-burn:focus { background-blend-mode: color-burn }
    .focus\\:bg-blend-hard-light:focus { background-blend-mode: hard-light }
    .focus\\:bg-blend-soft-light:focus { background-blend-mode: soft-light }
    .focus\\:bg-blend-difference:focus { background-blend-mode: difference }
    .focus\\:bg-blend-exclusion:focus { background-blend-mode: exclusion }
    .focus\\:bg-blend-hue:focus { background-blend-mode: hue }
    .focus\\:bg-blend-saturation:focus { background-blend-mode: saturation }
    .focus\\:bg-blend-color:focus { background-blend-mode: color }
    .focus\\:bg-blend-luminosity:focus { background-blend-mode: luminosity }

    .isolation-isolate { isolation: isolate }
    .isolation-auto { isolation: auto }

    .active\\:isolation-isolate:active { isolation: isolate }
    .active\\:isolation-auto:active { isolation: auto }
  `

  return generatePluginCss(testConfig).then(css => expect(css).toMatchCss(expectedCss))
})
