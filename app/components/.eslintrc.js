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
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "@typescript-eslint/indent": "off"
            }
        }
    ]
};
