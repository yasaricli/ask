Template.header.events({
  'click .logout' (event, template) {
    event.preventDefault();

    AccountsTemplates.logout(() => {

      // Go to index page
      Router.go('Index');
    });
  }
});
