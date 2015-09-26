Template.header.onCreated(function() {
  if (HELPERS.isAuthenticated) {
    this.subscribe('notifications');
  }
});
