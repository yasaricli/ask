Template.header.helpers({
  has(type) {
    return !!Notifications.findOne({ type: type });
  },

  count: function(type, prop) {
    return Notifications.find({ type: type }).count();
  }
});
