Users = Meteor.users;

// name is the field of the documents to search over
Users.initEasySearch(['username', 'profile.fullname'], {
  use: 'mongo-db'
});

Users.helpers({
  answers() {
    return Questions.find({
      answered: true
    }, { sort: { answeredAt: -1 } });
  },

  questions() {
    return Questions.find({
      answered: false
    }, { sort: { createdAt: -1 } });
  },

  absoluteUrl() {
    return Meteor.absoluteUrl('~' + this.username);
  },

  seeNotifications(type) {
    // all see Questions notifications
    return Notifications.find({ type: type }).forEach((doc) => {
      const notification = Notifications.findOne(doc._id);

      // seed
      notification.seed();
    });
  }
});
