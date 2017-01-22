define('portfolio/tests/unit/routes/portfolio-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/portfolio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/portfolio-test.js should pass jshint.');
  });
});