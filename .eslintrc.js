// module.exports = {
  // 'env': {
  //   'es2020': true
  // },
  // // 'extends': [
  // //   'eslint:recommended',
  // //   'plugin:vue/essential',
  // //   'plugin:@typescript-eslint/recommended'
  // // ],
  // 'extends': [
  //     'eslint:recommended',
  //     'plugin:@typescript-eslint/recommended',
  //     // 'prettier/@typescript-eslint',
  //     //'plugin:prettier/recommended',
  //     'plugin:vue/recommended',
  //     // '@vue/prettier',
  //     //'@vue/typescript',
  //     'plugin:@typescript-eslint/recommended'
  // ],
  // 'parserOptions': {
  //   'ecmaVersion': 11,
  //   'parser': '@typescript-eslint/parser',
  //   'sourceType': 'module'
  // },
  // 'plugins': [
  //   'vue',
  //   'nativescript',
  //   '@typescript-eslint'
  // ],
  // 'rules': {
  //   'indent': [
  //     'error',
  //     2
  //   ],
  //   'linebreak-style': [
  //     'error',
  //     'unix'
  //   ],
  //   'quotes': [
  //     'error',
  //     'single'
  //   ],
  //   'semi': [
  //     'error',
  //     'always'
  //   ],
  //   'nativescript/no-short-imports': 'error'
  // }

// };
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
          'nativescript/no-short-imports': 'error'
    }
};
