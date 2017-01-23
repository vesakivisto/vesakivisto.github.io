define('portfolio/helpers/app-version', ['exports', 'ember', 'portfolio/config/environment'], function (exports, _ember, _portfolioConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _portfolioConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});