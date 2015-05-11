import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://cambodiansmiles.com',
  namespace: 'api'
});
