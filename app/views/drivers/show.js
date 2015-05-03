import Ember from 'ember';
import MainContainerMixin from '../concerns/main_container_mixin';

export default Ember.View.extend(MainContainerMixin, {
  didInsertElement: function() {
    var heroHeight = window.innerHeight * 0.45;
    this.$('.profile-page-hero').css('height', heroHeight);
    this._super();
  }
});
