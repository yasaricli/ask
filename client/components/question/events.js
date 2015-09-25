Template.askMeForm.events({
  'click .reload'(event) {
    event.preventDefault();

    Session.set('onCreatedQuestion', false);
  },

  'submit .ask'(event, template) {
    event.preventDefault();
    const question = template.find('textarea').value;

    if (question) {
      Questions.insert({
        answerUserId: this.user._id,
        question: question
      }, (err) => {
        if (_.isUndefined(err)) {
          return Session.set('onCreatedQuestion', true);
        }
      });
    }
  },

  'submit .answer'(event, template) {
    event.preventDefault();
    const answer = template.find('textarea').value;

    if (answer) {
      Questions.update(this.question._id, {
        $set: {
          answered: true,
          answer: answer
        }
      }, (err) => {

        if (_.isUndefined(err)) {
          return Router.go('Questions');
        }
      });
    }
  }
});
