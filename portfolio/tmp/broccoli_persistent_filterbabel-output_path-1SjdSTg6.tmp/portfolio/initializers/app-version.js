define('portfolio/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'portfolio/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _portfolioConfigEnvironment) {
  var _config$APP = _portfolioConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});