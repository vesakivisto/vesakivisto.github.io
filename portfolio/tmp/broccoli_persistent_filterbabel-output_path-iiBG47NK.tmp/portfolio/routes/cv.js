define('portfolio/routes/cv', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    /*
    model() {
      return this.get('store').findAll('education');
    }
    */
    model: function model() {
      return _ember['default'].RSVP.hash({
        personalInfos: this.store.findAll('personal-info'),
        workExperiences: this.store.findAll('work-experience'),
        languages: this.store.findAll('language'),
        educations: this.store.findAll('education'),
        skills: this.store.findAll('skill')
      });
    }
  });
});