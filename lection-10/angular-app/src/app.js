angular.module('app', [])
  .controller('AppController', ['$scope', function ($scope) {
    $scope.message = "Hi";
  }])
  .directive('message', [function () {
    return {
      restrict: 'A',
      template: "<h1>{{message}}</h1>",
      controller: 'AppController'
    };
  }]);
