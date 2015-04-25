import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var intro = "Have an exciting trip around Cambodia. I can bring you to many places to try out our local food.";
    var avatar_url = "http://www.angkortuktuk.net/Savuth%20portrait.jpg";
    var bg_url = "http://www.epuzzled.net/New%20Folder%20(5)/tuk%20tuk%20Bangkok%20562%20kb.JPG";

    return [
      { id: 1, name: "Driver 1", intro: intro, avatar_url: avatar_url, bg_url: bg_url },
      { id: 2, name: "Driver 2", intro: intro, avatar_url: avatar_url, bg_url: bg_url },
      { id: 3, name: "Driver 3", intro: intro, avatar_url: avatar_url, bg_url: bg_url },
      { id: 4, name: "Driver 4", intro: intro, avatar_url: avatar_url, bg_url: bg_url },
      { id: 5, name: "Driver 5", intro: intro, avatar_url: avatar_url, bg_url: bg_url }
    ];
  }
});
