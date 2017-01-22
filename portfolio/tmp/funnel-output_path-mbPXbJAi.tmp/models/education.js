import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  school: DS.attr(),
  duration: DS.attr(),
  description: DS.attr()
});
