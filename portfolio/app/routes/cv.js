import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      personalInfos: this.store.findAll('personal-info'),
      workExperiences: this.store.findAll('work-experience'),
      languages: this.store.findAll('language'),
      educations: this.store.findAll('education'),
      skills: this.store.findAll('skill')
    });
  }
});
