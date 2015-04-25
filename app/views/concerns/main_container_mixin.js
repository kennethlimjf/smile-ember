import Ember from 'ember';

export default Ember.Mixin.create({
  init: function() {
    var context = this;
    Ember.$(window).on('resize', Ember.run.bind(context, context.setContainerHeight));
    this._super.apply(this, arguments);
  },

  didInsertElement: function() {
    this.setContainerHeight();
  },

  containerHeight: function() {
    return window.innerHeight - 80;
  },

  setContainerHeight: function() {
    this.$('.main-container').css('height', this.containerHeight());
  }
});
