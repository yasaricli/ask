const root = this;

root.SCHEMAS = {
  settings: new SimpleSchema({
    username: {
      type: String,
      label: 'Username',
      optional: true,
      autoform: {
        disabled: true
      }
    },
    email: {
      type: String,
      label: 'Email',
      optional: true,
      regEx: SimpleSchema.RegEx.Url,
      autoform: {
        disabled: true
      }
    },
    fullname: {
      type: String,
      label: 'Full Name',
      max: 50
    },
    website: {
      type: String,
      label: 'Website',
      regEx: SimpleSchema.RegEx.Url,
      optional: true
    },
    bio: {
      type: String,
      label: 'Bio',
      optional: true,
      autoform: {
        type: 'textarea'
      }
    },
    gender: {
      type: String,
      label: 'Gender',
      autoform: {
        type: 'select',
        options() {
          return GENDERS;
        }
      }
    },
    language: {
      type: String,
      label: 'Language',
      autoform: {
        type: 'select',
        options() {
          return LANGUAGES;
        }
      }
    }
  })
};
