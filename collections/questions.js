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
    type: String
  },

  // XXX: Object list answers ?
  answer: {
    type: String,
    optional: true
  },

  answered: {
    type: Boolean
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
    autoValue() {
      return new Date();
    }
  },
}));
