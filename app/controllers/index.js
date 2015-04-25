import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
    areas: [
      { id: "Battambang", label: "Battambang" },
      { id: "Kampong Cham", label: "Kampong Cham" },
      { id: "Kampong Chhnang", label: "Kampong Chhnang" },
      { id: "Sihanoukville (Kampong Som)", label: "Sihanoukville (Kampong Som)" },
      { id: "Kampong Speu", label: "Kampong Speu" },
      { id: "Kampong Thom", label: "Kampong Thom" },
      { id: "Kampot", label: "Kampot" },
      { id: "Koh Kong", label: "Koh Kong" }
    ],
    languages: [
      Ember.Object.create({ id: "English", label: "English", checked: false }),
      Ember.Object.create({ id: "Chinese", label: "Chinese", checked: false }),
      Ember.Object.create({ id: "Khmer", label: "Khmer", checked: false })
    ],
    channels: [
      Ember.Object.create({ id: "Facebook", label: "Facebook", checked: false }),
      Ember.Object.create({ id: "WeChat", label: "WeChat", checked: false}),
      Ember.Object.create({ id: "Email", label: "Email", checked: false })
    ]
  },

  actions: {
    searchDrivers: function() {
      this.transitionToRoute('drivers');
      return false;
    }
  }
});
