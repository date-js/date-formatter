const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      'quotes': ['error', 'single'],
      'semi': 'error',
    },
  }
);
