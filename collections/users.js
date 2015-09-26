Users = Meteor.users;

Users.helpers({
  answers() {
    return Questions.find({
      answerUserId: this._id,
      answered: true
    }, { sort: { answeredAt: -1 } });
  },
  questions() {
    return Questions.find({
      answerUserId: this._id,
      answered: false
    }, { sort: { createdAt: -1 } });
  },

  absoluteUrl() {
    return Meteor.absoluteUrl('~' + this.username);
  },

  notificationsSeeIt(type) {
    // all see Questions notifications
    return Notifications.find({ type: type }).forEach((doc) => {
      const notification = Notifications.findOne(doc._id);

      // seed
      notification.see();
    });
  }
});
