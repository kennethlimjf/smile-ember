import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:         DS.attr(),
  nickname:     DS.attr('String'),
  shortDesc:    DS.attr('String'),
  description:  DS.attr('String'),
  phone:        DS.attr('String'),
  email:        DS.attr('String'),
  whatsapp:     DS.attr('String'),
  wechat:       DS.attr('String'),
  facebook:     DS.attr('String'),
  available:    DS.attr('Boolean'),
  drivingYears: DS.attr('String'),
  avatarUrl:    DS.attr('String',
                  { defaultValue : 'http://www.angkortuktuk.net/Savuth%20portrait.jpg' }),
  bgUrl:        DS.attr('String',
                  { defaultValue : 'http://www.epuzzled.net/New%20Folder%20(5)/tuk%20tuk%20Bangkok%20562%20kb.JPG'}),

  fullName:     Ember.computed('name', function(){
    return this.get('name.first') + " " + this.get('name.last');
  })
});
