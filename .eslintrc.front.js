'use strict';
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off';
  return acc;
}, {});

module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'react-hooks', 'import'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  globals: {
    window: false,
  },
  settings: {
    react: {
      version: '^17.0.2',
    },
  },
  rules: {
    ...a11yOff,
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'func-names': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'newline-before-return': 'error',
    'no-nested-ternary': ['error'],
    'object-curly-newline': [2, { multiline: true, consistent: true }],
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'block-like', next: 'if' },
    ],
    'quote-props': ['error', 'as-needed'],
    'import/order': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
