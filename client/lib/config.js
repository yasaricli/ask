var pwd = AccountsTemplates.removeField('password');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',

  onBeforeAction: function() {
    var body = $('body');

    // add class
    body.attr('id', 'Pecord' + this.route.getName());

    // and next
    this.next();
  }
});

AccountsTemplates.configure({
  enablePasswordChange: true,
  homeRoutePath: '/',
  showPlaceholders: false,

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
      errStr: 'Invalid email',
  },
  pwd
]);
