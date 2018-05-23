module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'standard',
    //'plugin:vue/recommended',
    'prettier'
  ],
  // required to lint *.vue files
  plugins: [],
  // add your custom rules here
  rules: {}
}