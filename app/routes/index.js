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
      var subcategory_deletions = category.get('subcategories').map(function(subcategory) {
        // var listing_deletions = subcategory.get('listings').map(function(listing) {
        //   return listing.destroyRecord();
        return subcategory.destroyRecord();
        });
        // return listing_deletions
      // });

      // Ember.RSVP.all(listing_deletions)
      //   .then(function() {
          Ember.RSVP.all(subcategory_deletions)
            .then(function() {
              return category.destroyRecord();
            })
          // });
        this.transitionTo('index');
      }
    }
  });
