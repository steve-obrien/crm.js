'use strict';

/* Controllers */


function ContactListCtrl($scope, $http) {
  $http.get('contacts/contacts.json').success(function(data) {
    $scope.contacts = data;
  });
  $scope.getContact = function(contact){
	  $scope.selContact = contact;
  }
  $scope.orderProp = 'name';
}



function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];
