import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("drivers", function() {
    this.route("show", { path: ":id" });
  });
  this.route("about", { path: "about-us" });
  this.route("team", { path: "our-team" });
  this.route("faq", { path: "faq" });
  this.route("feedback", { path: "feedback" });
  this.route('logout');
  this.route('login');
  this.route('protected');
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
      'page':   this.get('url'),
      'title':  this.get('url')
    });
  }.on('didTransition')
});

export default Router;
