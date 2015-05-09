import Ember from 'ember';

export default Ember.Mixin.create({
  classNames: ["scrollable"],

  init: function() {
    var context = this;
    Ember.$(window).on('resize', Ember.run.bind(context, context.setHeight));
    this._super.apply(this, arguments);
  },

  didInsertElement: function() {
    this.setHeight();
    this._super.apply(this, arguments);
  },

  containerHeight: function() {
    // inner window height - topbar height
    return window.innerHeight - 160;
  },

  setHeight: function() {
    this.setContainerHeight();
    this.setPageHeight();
  },

  setContainerHeight: function() {
    this.$('.main-container').css('height', this.containerHeight());
  },

  setPageHeight: function(){
    // page_height = height + padding_top + padding_bottom
    var pageHeight = this.$('.page').height() + 28 + 55;

    if(pageHeight < this.containerHeight() - 60) {
      this.$('.page').css('height', this.containerHeight() - 60);
    }
  }
});
