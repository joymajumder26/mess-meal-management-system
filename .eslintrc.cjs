module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',

    // "prettier" to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-bind': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 0,
  },
};
