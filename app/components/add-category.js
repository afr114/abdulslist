import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategoryForm: false,

  actions: {
    addNewCategory() {
      this.set('addNewCategoryForm', true);
    },

    saveCategory() {
      var params = {
        name: this.get('name'),
      };
      this.set('addNewCategoryForm', false),
      this.sendAction('saveCategory', params);
    }
  }
  });
