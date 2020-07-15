module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": ["nativescript"],
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
        'nativescript/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1,
            'ignores': []
        }],
        'space-before-function-paren': ['error', 'never'],
    }
};
