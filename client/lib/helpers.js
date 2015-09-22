let HELPERS = {
  isAuthenticated: () => {
    return !_.isNull(Meteor.userId());
  }
};

// REGISTER HELPERS
_.each(HELPERS, (fn, name) => {
  Blaze.registerHelper(name, fn);
});
