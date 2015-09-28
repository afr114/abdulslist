import Ember from 'ember';

export default Ember.Component.extend({
  addNewSubCategory: false,

  actions: {
    addSubCategory() {
      this.set('addNewSubCategory', true);
    },

    saveSubCategory() {
      var params = {
        name: this.get('name'),
        category: this.get('category'),
      };
      this.set('addNewSubCategory', false),
      this.sendAction('saveSubCategory', params);
    }
  }
});
