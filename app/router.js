import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('subcategory', {path: 'subcategory/:subcategory_id'});
});

export default Router;
