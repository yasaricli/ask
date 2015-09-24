Tracker.autorun(() => {
  const currentUser = Meteor.user();

  // set language
  if (currentUser) {
    TAPi18n.setLanguage(currentUser.profile.language || 'en');
  }
});
