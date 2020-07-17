module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": ["nativescript","@typescript-eslint"],
    "rules": {
        "vue/script-indent": ["error", 2, {
            "baseIndent": 1,
            "switchCase": 1,
            "ignores": []
        }],
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
    },
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off"
            }
        }
    ]
};
