import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://api.cambodiansmiles.com',
  namespace: 'api'
});
