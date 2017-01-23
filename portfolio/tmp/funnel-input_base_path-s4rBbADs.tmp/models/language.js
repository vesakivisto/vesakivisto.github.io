import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  level: DS.attr(),
  notes: DS.attr()
});
