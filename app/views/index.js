import Ember from 'ember';
import HeroMixin from './concerns/hero_mixin'

export default Ember.View.extend(HeroMixin, {
  // Set hero height. Eg. 0.8 = 80% of screen height
  heroFold: 1
});
