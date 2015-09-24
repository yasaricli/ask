AutoForm.hooks({
  settingsForm: {
    onSubmit(doc) {
      const currentUser = Meteor.user();

      // Safe User Profile.
      Users.update(currentUser._id, {

        // doc
        $set: {
          profile: doc
        }

      // Updated callback
      }, () => {
        Session.set('settingsOnSaved', TAPi18n.__('settings-updated-message'));
      });

      // return default false submit form.
      return false;
    }
  }
});
