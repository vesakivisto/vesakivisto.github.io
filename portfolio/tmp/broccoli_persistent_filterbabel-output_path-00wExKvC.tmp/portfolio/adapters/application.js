define('portfolio/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'api'
  });
});