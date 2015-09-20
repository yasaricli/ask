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
