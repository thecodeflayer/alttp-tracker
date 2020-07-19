module.exports = {
  "env": {"jasmine": true},
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
    'space-before-function-paren': ['error', 'never'],
  }
};
