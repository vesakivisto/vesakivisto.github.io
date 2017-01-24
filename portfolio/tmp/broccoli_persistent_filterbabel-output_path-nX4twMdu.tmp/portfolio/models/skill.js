define('portfolio/models/skill', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    items: _emberData['default'].attr()
  });
});