module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'error', 'Snackbar'],
      },
    ],
  },
}

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   globals: {
//     use: 'readonly',
//   },
//   extends: [
//     'plugin:vue/essential',
//     // 'standard',
//     // "@nuxtjs",
//     'plugin:prettier/recommended',
//     'eslint:recommended',
//     'eslint-config-prettier',
//     'plugin:nuxt/recommended',
//     'prettier/vue',
//     // 'plugin:prettier-vue/recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['prettier'],
//   rules: {
//     semi: ['error', 'never'],
//     'prettier/prettier': ['error', { singleQuote: true, semi: false }],
//     'no-unused-vars': 'warn',
//     'no-empty': 'warn',
//   },
// }
