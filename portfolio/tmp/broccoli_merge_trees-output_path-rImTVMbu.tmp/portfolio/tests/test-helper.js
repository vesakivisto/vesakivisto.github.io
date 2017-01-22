define('portfolio/tests/test-helper', ['exports', 'portfolio/tests/helpers/resolver', 'ember-qunit'], function (exports, _portfolioTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_portfolioTestsHelpersResolver['default']);
});