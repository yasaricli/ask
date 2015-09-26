Questions = new Mongo.Collection('questions');

Questions.attachSchema(new SimpleSchema({
  questionUserId: {
    type: String,
    autoValue() {
      if (this.isInsert) {
        return this.userId;
      }
    }
  },

  answerUserId: {
    type: String
  },

  question: {
    type: String,
    max: 300
  },

  // XXX: Object list answers ?
  answer: {
    type: String,
    optional: true,
    max: 300
  },

  answered: {
    type: Boolean,
    autoValue() {
      if (this.isInsert) {
        return false;
      }
    }
  },

  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },

  answeredAt: {
    type: Date,
    optional: true
  }
}));

Questions.helpers({
  questionUser() {
    return Users.findOne(this.questionUserId);
  },
  answerUser() {
    return Users.findOne(this.answerUserId);
  }
});

if (Meteor.isServer) {
  Questions.after.insert(function(userId, doc) {

    if (!_.isEqual(doc.answerUserId, userId)) {

      // new Notification
      Notifications.insert({
        docId: doc._id,
        userId: doc.answerUserId,
        type: 'Question'
      });
    }
  });

  Questions.before.update(function(userId, doc, fieldNames, modifier, options) {

    // is answered boolean has $set Object then
    if (_.has(modifier.$set, 'answered')) {
      modifier.$set.answeredAt = new Date();

      if (!_.isEqual(doc.questionUserId, userId)) {

        // new Notification
        Notifications.insert({
          docId: doc._id,
          userId: doc.questionUserId,
          type: 'Answered'
        });
      }
    }
  });
}
