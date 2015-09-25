Router.route('/questions', {
  name: 'Questions',
  waitOn() {
    return Meteor.subscribe('questions');
  }
});
