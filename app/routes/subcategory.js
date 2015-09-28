import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('subcategory', params.subcategory_id);
  },

  actions: {
    saveNewListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var subcategory = params.subcategory;
      subcategory.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return subcategory.save();
      });
      this.transitionTo('subcategory', params.subcategory_id)
    }
  }
});
