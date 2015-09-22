Router.route('/~:username', {
  name: 'Profile',
  waitOn() {
    return Meteor.subscribe('profile', this.params.username);
  },

  data() {
    const params = this.params;

    return {
      user() {
        return Users.findOne({ username: params.username });
      }
    }
  }
});

Router.route('/friends', {
  name: 'Friends'
});

Router.route('/settings', {
  name: 'Settings'
});
