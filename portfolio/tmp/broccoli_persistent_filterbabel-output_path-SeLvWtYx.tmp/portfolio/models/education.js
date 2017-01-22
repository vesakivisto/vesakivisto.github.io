define('portfolio/models/education', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr(),
    school: _emberData['default'].attr(),
    duration: _emberData['default'].attr(),
    description: _emberData['default'].attr()
  });
});