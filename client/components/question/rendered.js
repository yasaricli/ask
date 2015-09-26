Template.questions.onRendered(() => {
  const user = Meteor.user();

  // see Question
  user.notificationsSeeIt('Question');
});

Template.askMeForm.onRendered(() => {
  this.$('textarea').autosize();

  // created question then reset
  Session.set('onCreatedQuestion', false);
});
