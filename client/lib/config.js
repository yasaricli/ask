const pwd = AccountsTemplates.removeField('password');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

  onBeforeAction() {
    const body = $('body');

    // add class
    body.attr('id', 'Pecord' + this.route.getName());

    // and next
    this.next();
  }
});

Avatar.setOptions({
  gravatarDefault: "retro",
  imageSizes: {
    'normal': 75,
    'big': 160,
    'low-small': 24
  }
});

Router.plugin('ensureSignedIn', {
  only: ['Wall', 'Questions', 'Answers', 'Search', 'Settings']
});

AccountsTemplates.configure({
  enablePasswordChange: true,
  homeRoutePath: '/wall', // user is authenticated then home page.
  showPlaceholders: false,
  focusFirstInput: false,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: "fullname",
      type: "text",
      displayName: "Full name",
      required: true
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email'
  },
  pwd,

  {
    _id: "gender",
    type: "select",
    displayName: "Gender",
    required: true,
    select: [
        {
            text: "Male",
            value: "male"
        },
        {
            text: "Female",
            value: "female"
        },
    ],
  },
]);
