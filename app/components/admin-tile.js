import Ember from 'ember';

export default Ember.Component.extend({
  displayAdminTile: false,
  actions: {
    openAdminTile() {
      this.set('displayAdminTile', true);
    },
    closeAdminTile() {
      this.set('displayAdminTile', false);
  },

    saveSubCategory(params) {
      this.sendAction('saveSubCategory', params)
    },

    destroyCategory(category){
      if (confirm('Are you sure you want to delete this category?')) {
        this.sendAction('destroyCategory', category);
      }
    },
      saveCategory(params){
        this.sendAction('saveCategory', params)
      }
    }
});
