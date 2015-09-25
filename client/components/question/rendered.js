Template.askMeForm.onRendered(() => {
  this.$('textarea').autosize();

  // created question then reset
  Session.set('onCreatedQuestion', false);
});
