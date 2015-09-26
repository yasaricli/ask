Meteor.publishComposite('profile', (username) => {
  return {
    find() {
      return Users.find({ username: username });
    },

    children: [
      {
        find(user) {
          return Questions.find({
            answerUserId: user._id,
            answered: true
          });
        }
      }
    ]
  }
});

Meteor.publishComposite('questions', () => {
  return {
    find() {
      return Questions.find({ answerUserId: this.userId });
    }
  }
});

Meteor.publishComposite('question', (_id) => {
  return {
    find() {
      return Questions.find({ _id: _id });
    }
  }
});

Meteor.publishComposite('notifications', () => {
  return {
    find() {
      return Notifications.find({
        userId: this.userId,
        see: false
      });
    }
  }
});
