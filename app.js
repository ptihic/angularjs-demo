angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'route-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'route-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);