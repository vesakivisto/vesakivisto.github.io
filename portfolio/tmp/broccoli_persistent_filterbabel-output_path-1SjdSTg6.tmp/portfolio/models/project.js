define('portfolio/models/project', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    description: _emberData['default'].attr(),
    image: _emberData['default'].attr()
  });
});