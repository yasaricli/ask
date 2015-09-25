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

Questions.before.update(function(userId, doc, fieldNames, modifier, options) {
  modifier.$set.answeredAt = new Date();
});
