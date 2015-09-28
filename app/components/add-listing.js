import Ember from 'ember';

export default Ember.Component.extend({
  addNewListingForm: false,

  actions: {
    addnewListing() {
      this.set('addNewListingForm', true);
    },

    saveNewListing() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        subcategory: this.get('subcategory'),
      };
      this.set('addNewListingForm', false),
      this.sendAction('saveNewListing', params);
    }
  }
});
