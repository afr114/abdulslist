import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    saveSubCategory(params) {
      var newSubCategory = this.store.createRecord('subcategory', params);
      var category = params.category;
      category.get('subcategories').addObject(newSubCategory);
      newSubCategory.save().then(function(){
        return category.save();
      });
      this.transitionTo('index')
    }
  }
});
