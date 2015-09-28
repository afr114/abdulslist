import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  subcategory: DS.belongsTo('subcategory', {async: true}),
});
