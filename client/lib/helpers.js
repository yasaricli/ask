var HELPERS = {
  isAuthenticated: function() {
    return !_.isNull(Meteor.userId());
  }
};

// REGISTER HELPERS
_.each(HELPERS, function(fn, name) {
  Blaze.registerHelper(name, fn);
});
