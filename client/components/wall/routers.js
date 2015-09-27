Router.route('/wall', {
  name: 'Wall',
  waitOn() {
    return Meteor.subscribe('wall');
  },

  data() {
    return {
      questions() {
        return Questions.find({}, {
          sort: {
            answeredAt: -1
          }
        });
      }
    }
  }
});
