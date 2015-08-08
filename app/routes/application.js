import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
actions: {
        facebookLogin: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').then(function () {
	   Ember.$('#loginModal').foundation('reveal', 'close');

                //do sth here!
            });
            return;
        },
        googleLogin: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2').then(function () {
	   Ember.$('#loginModal').foundation('reveal', 'close');
                //do sth here!
            });
            return;
        }
    }
});
