import Ember from 'ember';

export default Ember.Mixin.create({
  heroFold: 1,

  init: function() {
    var context = this;
    Ember.$(window).on('resize', Ember.run.bind(context, context.setHeroHeight));
    this._super.apply(this, arguments);
  },

  didInsertElement: function() {
    this.setHeroHeight();
  },

  heroHeight: function() {
    return window.innerHeight * this.heroFold;
  },

  setHeroHeight: function() {
    this.$('.hero').css('height', this.heroHeight());
  }
});
