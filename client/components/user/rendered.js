Template.settings.onRendered(() => {

  // Settings submit form save pass.
  Session.set('settingsOnSaved', false);
});

Template.profile.onRendered(() => {
  this.$('textarea').autosize();
});
