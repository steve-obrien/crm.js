'use strict';


// Declare app level module which depends on filters, and services
var crm = angular.module('crm', ['crm.filters', 'crm.services', 'crm.directives']);


crm.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact/:id', {action: '', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
 