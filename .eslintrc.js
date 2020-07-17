module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": ["nativescript","@typescript-eslint"],
    "rules": {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'nativescript/no-short-imports': 'error',
        'space-before-function-paren': ['error', 'never'],
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error"],
    }
};
