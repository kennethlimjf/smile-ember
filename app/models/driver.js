import DS from "ember-data";
import Ember from "ember";

export default DS.Model.extend({
  firstName:        DS.attr('String'),
  lastName:         DS.attr('String'),
  nickname:         DS.attr("String"),
  shortDesc:        DS.attr("String"),
  description:      DS.attr("String"),
  phone:            DS.attr("String"),
  email:            DS.attr("String"),
  sourceUrl:        DS.attr("String"),
  videoUrl:         DS.attr("String"),
  facebookUrl:      DS.attr("String"),
  wechatId:         DS.attr("String"),
  whatsappId:       DS.attr("String"),
  available:        DS.attr("Boolean"),
  drivingYears:     DS.attr("Number"),
  languagesWritten: DS.attr(),
  languagesSpoken:  DS.attr(),
  vehicles:         DS.attr(),
  cities:           DS.attr(),
  avatarUrl:        DS.attr("String", { defaultValue : "http://www.angkortuktuk.net/Savuth%20portrait.jpg" }),
  backgroundUrl:    DS.attr("String", { defaultValue : "http://www.epuzzled.net/New%20Folder%20(5)/tuk%20tuk%20Bangkok%20562%20kb.JPG"}),

  fullName: Ember.computed("name", function() {
    return this.get("firstName") + " " + this.get("lastName");
  }),

  mailToEmail: Ember.computed("email", function() {
    return "mailto:" + this.get("email");
  }),

  callToPhone: Ember.computed("phone", function() {
    return "tel:" + this.get("phone");
  })
});
