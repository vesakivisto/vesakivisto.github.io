define('portfolio/router', ['exports', 'ember', 'portfolio/config/environment'], function (exports, _ember, _portfolioConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _portfolioConfigEnvironment['default'].locationType,
    rootURL: _portfolioConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('cv');
    this.route('portfolio');
  });

  exports['default'] = Router;
});