Template.questions.onRendered(() => {
  const user = Meteor.user();

  // see Question
  user.seeNotifications('Question');
});

Template.answers.onRendered(() => {
  const user = Meteor.user();

  // see Question
  user.seeNotifications('Answered');
});

Template.askMeForm.onRendered(() => {
  this.$('textarea').autosize();

  // created question then reset
  Session.set('onCreatedQuestion', false);
});
