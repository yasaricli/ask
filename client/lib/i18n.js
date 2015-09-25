Tracker.autorun(() => {
  const currentUser = Meteor.user();

  // default language
  let language = 'en';

  // is aut authenticated then
  if (currentUser) {
    language = currentUser.profile.language;
  }

  // General language set
  TAPi18n.setLanguage(language);

  // set accounts core language.
  T9n.setLanguage(language);
});
