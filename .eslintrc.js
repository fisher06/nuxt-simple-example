module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  globals: {
    $nuxt: true,
    cy: true,
    Cypress: true,
    FB: true
  },
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
