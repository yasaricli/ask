Template.questions.onRendered(() => {
  const user = Meteor.user();

  // see Question
  user.seeNotifications('Question');
});

Template.askMeForm.onRendered(() => {
  this.$('textarea').autosize();

  // created question then reset
  Session.set('onCreatedQuestion', false);
});
