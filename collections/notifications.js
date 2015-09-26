Notifications = new Mongo.Collection('notifications');

Notifications.attachSchema(new SimpleSchema({
  userId: {
    denyUpdate: true,
    type: String
  },

  type: {
    denyUpdate: true,
    type: String
  },

  see: {
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
  }
}));

Notifications.helpers({
  see() {
    Notifications.update(this._id, {
      $set: {
        see: true
      }
    });
  }
});
