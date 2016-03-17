/**
 * Shared config used for all JavaScript (es5, es6, Angular, React)
 *
 * This is just JavaScript Standard Style with a few extra restrictions
 * to match our environment and team. These rules should still leave code
 * compliant with Standard.
 *
 * see standardjs.com
 */
module.exports = {
  extends: 'standard',
  env: {
    // assume all browser APIs are available
    browser: true
  },
  parser: 'babel-eslint',
  // globals: {
  //   // React is a global, and should never be written to
  //   React: false
  // },

  /**
   * Rule details at http://eslint.org/docs/rules/
   * Specific rules usually http://eslint.org/docs/rules/<rule-name>
   * First argument to a rule is always one of:
   *  - 0: disable rule
   *  - 1: generate warning
   *  - 2: generate error
   */
  rules: {
    // only allow LF
    'linebreak-style': [2, 'unix'],

    // Enforced max line length. Temporarily disable in the rare cases that
    // a long line is more readable (e.g. URLs), using
    //
    //    /* eslint-disable max-len */
    //    Your legitimately long lines here...
    //    /* eslint-enable max-len */
    'max-len': [
      2,  // error to enforce compliance, disable when needed
      80, // line length (characters)
      2   // count tabs as 2 characters (required, but we don't allow tabs)
    ],

    // No logging to console, so debugging lines are not left in by mistake.
    // Just a warning, do not want to stop build during development
    'no-console': [1, { allow: ['warn', 'error'] }],

    // Do not use variables before they are defined.
    'no-use-before-define': [
      2,
      'nofunc' // allow use of hoisted functions before their definition
    ]
  }
}
