define('portfolio/app', ['exports', 'ember', 'portfolio/resolver', 'ember-load-initializers', 'portfolio/config/environment'], function (exports, _ember, _portfolioResolver, _emberLoadInitializers, _portfolioConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _portfolioConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _portfolioConfigEnvironment['default'].podModulePrefix,
    Resolver: _portfolioResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _portfolioConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});