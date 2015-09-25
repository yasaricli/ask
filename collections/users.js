Users = Meteor.users;

Users.helpers({
  answers() {
    return Questions.find({
      answerUserId: this._id,
      answered: true
    });
  },
  questions() {
    return Questions.find({
      answerUserId: this._id,
      answered: false
    });
  },

  absoluteUrl() {
    return Meteor.absoluteUrl('~' + this.username);
  }
});
