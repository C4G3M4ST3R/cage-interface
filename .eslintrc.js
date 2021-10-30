module.exports = {
  root: true,
  env: {
    node: true,
    browser: false
  },
  extends: [
    'plugin:vue/essential',
    'prettier',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    '@nuxtjs'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['warn', 2],
    'linebreak-style': ['off'],
    'max-len': ['warn', 120],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-var': 'error',
    semi: 'never',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error'
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
