const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {
    rules: {
      'no-console': 'off',
      'vue/custom-event-name-casing': 'off',
      'antfu/top-level-function': 'off',
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
  unocss.configs.flat,
)
