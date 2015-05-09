import Ember from 'ember';
import MainContainerMixin from './concerns/main_container_mixin';
import ResetScroll from './concerns/reset_scroll';

export default Ember.View.extend(ResetScroll, MainContainerMixin);
