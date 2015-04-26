import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
    areas: [
      { id: "Siem Reap", label: "Siem Reap" },
      { id: "Phnom Penh", label: "Phnom Penh" },
    ],
    languages: [
      Ember.Object.create({ id: "English", label: "English", checked: false }),
      Ember.Object.create({ id: "Chinese", label: "Chinese", checked: false }),
      Ember.Object.create({ id: "Khmer", label: "Khmer", checked: false })
    ],
    channels: [
      Ember.Object.create({ id: "Mobile", label: "Mobile", checked: false }),
      Ember.Object.create({ id: "Email", label: "Email", checked: false }),
      Ember.Object.create({ id: "Facebook", label: "Facebook", checked: false }),
      Ember.Object.create({ id: "WeChat", label: "WeChat", checked: false})
 
    ]
  },

  actions: {
    searchDrivers: function() {
      this.transitionToRoute('drivers');
      return false;
    }
  }
});
