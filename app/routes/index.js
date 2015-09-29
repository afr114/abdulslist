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
      this.transitionTo('index');
    },

    saveCategory(params) {
      var newSaveCategory = this.store.createRecord('category', params);
      newSaveCategory.save();
      this.transitionTo('index')
    },

    destroyCategory(category) {
      category.get('subcategories').then(function(subcategories) {
        subcategories.forEach(function(subcategory){
          subcategory.get('listings').then(function(listings){
            listings.forEach(function(listing){
              console.log(listing.get('name'));
            // listing.destroyRecord();
            });
          });
              // console.log(subcategory);
              // console.log("subcategory");
          console.log(subcategory.get('name'));
          // subcategory.destroyRecord();
        });
         console.log(category.get('name'));
        });

      this.transitionTo('index');
      }
    }
  });
