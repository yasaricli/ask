Meteor.publishComposite('profile', (username) => {
  return {
    find() {
      return Users.find({ username: username });
    }
  }
});
