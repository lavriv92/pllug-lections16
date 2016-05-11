angular.module('app', [
  'ngRoute'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.template.html',
      controller: 'homeController'
    })
    .when('/contacts', {
      templateUrl: 'contacts/contacts.template.html',
      controller: 'contactsController'
    })
    .when('/about', {
      templateUrl: 'about/about.template.html',
      controller: 'aboutController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);
