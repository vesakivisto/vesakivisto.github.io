define('portfolio/models/work-experience', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    work: _emberData['default'].attr()
  });
});