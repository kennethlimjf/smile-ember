import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("drivers", function() {
    this.route("show", { path: ":driver_id" });
  });
  this.route("about", { path: "about-us" });
});

export default Router;
