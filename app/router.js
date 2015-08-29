import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('words', function() {
    this.route('un-dominican');
  });
  this.route('wildcard', { path: '*:' });
});

export default Router;
