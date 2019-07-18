const tailwindConfig = require('./tailwind.config.js')
const { buildPlugin } = require('@hacknug/tailwindcss-plugin-utils')

module.exports = function (pluginConfig) {
  return function (coreUtils) {
    return buildPlugin(tailwindConfig, coreUtils, {
      'blend': ['mixBlendMode'],
      'bg-blend': ['backgroundBlendMode', 'mixBlendMode'],
      'isolation': ['isolation'],
    })
  }
}
