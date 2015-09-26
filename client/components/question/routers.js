Router.route('/questions', {
  name: 'Questions',
  waitOn() {
    return Meteor.subscribe('questions');
  }
});

Router.route('/answers', {
  name: 'Answers',
  waitOn() {
    return Meteor.subscribe('answers');
  }
});

Router.route('/answer/:_id', {
  name: 'Answer',
  waitOn() {
    return Meteor.subscribe('question', this.params._id);
  },

  data() {
    const params = this.params;
    return {
      question() {
        return Questions.findOne(params._id);
      }
    }
  }
});
