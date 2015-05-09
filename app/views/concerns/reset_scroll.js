import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement: function() {
    Ember.$('.main-container').scrollTop(0);
  }
})
