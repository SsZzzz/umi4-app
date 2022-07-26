module.exports = {
  extends: [
    require.resolve('@umijs/max/stylelint'),
    'stylelint-config-recess-order',
  ],
  rules: {
    'selector-class-pattern': null, // camel case selectors
  },
};
