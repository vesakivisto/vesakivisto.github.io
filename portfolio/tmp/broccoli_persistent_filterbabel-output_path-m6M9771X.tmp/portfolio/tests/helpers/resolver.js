define('portfolio/tests/helpers/resolver', ['exports', 'portfolio/resolver', 'portfolio/config/environment'], function (exports, _portfolioResolver, _portfolioConfigEnvironment) {

  var resolver = _portfolioResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _portfolioConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _portfolioConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});