module.exports = {
  "env": {
    "node": true,
    "jasmine": true
  },
  "extends": [
    "plugin:jasmine/recommended"],
  "plugins": [
    "jasmine"
  ],
  "rules": {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'jasmine/new-line-before-expect': 'off',
    'space-before-function-paren': ['error', 'never'],
  }
};
