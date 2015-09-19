Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'
});

//
// Example pages routes
//

Router.route('/teamboard', function () {
  this.render('teamBoard');
});

Router.route('/agileboard', function () {
  this.render('agileBoard');
});

Router.route('/timeboard', function () {
  this.render('timeBoard');
});

Router.route('/', function () {
  this.render('home');
});
