// This config just adds support for React and es6 parsing

module.exports = {
  extends: 'zanata',

  ecmaFeatures: {
    jsx: true
  },

  env: {
    node: false
  },

  plugins: [
    'react'
  ],

  // Use the babel parser to handle es6 and jsx properly
  parser: 'babel-eslint',

  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2
  }
}
