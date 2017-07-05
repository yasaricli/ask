HELPERS = {
  isAuthenticated() {
    return !_.isNull(Meteor.userId());
  },

  isCurrentUser(user) {
    const currentUser = Meteor.user();

    // is string then user is userId.
    if (_.isString(user)) {
      return _.isEqual(currentUser._id, user);
    }

    // return Boolean True or False
    return _.isEqual(currentUser._id, user._id);
  },

  session(key) {
    return Session.get(key);
  }
};


// REGISTER HELPERS
_.each(HELPERS, (fn, name) => {
  Blaze.registerHelper(name, fn);
});
