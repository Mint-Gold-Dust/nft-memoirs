'use strict';

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['core/**/*.js', 'client/**/*.js'],
      ...require('./.eslintrc.back.js'),
    },
    {
      files: ['app/**/*js'],
      ...require('./.eslintrc.front.js'),
    },
  ],
};
