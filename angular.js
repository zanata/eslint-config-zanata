module.exports = {
  extends: 'zanata'

  /* Pairs global variable name, and whether to allow writing to it.
   * See:
   * http://eslint.org/docs/user-guide/configuring.html#specifying-globals
   */
  globals: {
    angular: false // angular is a global, and should never be written to
  }
}
