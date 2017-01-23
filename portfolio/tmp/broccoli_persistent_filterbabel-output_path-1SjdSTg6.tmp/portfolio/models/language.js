define('portfolio/models/language', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    level: _emberData['default'].attr(),
    notes: _emberData['default'].attr()
  });
});