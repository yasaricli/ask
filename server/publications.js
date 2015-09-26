const userFields = {
  fields: {
    username: 1,
    profile: 1,
    emails: 1,
    status: 1
  }
};

Meteor.publishComposite('profile', (username) => {
  return {
    find() {
      return Users.find({ username: username }, userFields);
    },

    children: [
      {
        find(user) {
          return Questions.find({
            answerUserId: user._id,
            answered: true
          });
        },
        children: [
          {
            find(question) {
              return Users.find({ _id: question.questionUserId }, userFields);
            }
          }
        ]
      }
    ]
  }
});

Meteor.publishComposite('questions', () => {
  return {
    find() {
      return Questions.find({
        answerUserId: this.userId,
        answered: false
      });
    },
    children: [
      {
        find(question) {
          return Users.find({ _id: question.questionUserId }, userFields);
        }
      }
    ]
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
