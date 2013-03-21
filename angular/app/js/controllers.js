'use strict';

/* Controllers */


function ContactListCtrl($scope, $http) {
  $http.get('contacts/contacts.json').success(function(data) {
    $scope.contacts = data;
  });
  $scope.getContact = function(contact){
	  $scope.selContact = contact;
  }
  
  $scope.name = function(contact){
	  if (contact.first_name == '' && contact.last_name)
		  return 'No Name';
	  return contact.first_name + ' ' + contact.last_name;
  } 
  $scope.editMode = false;
  $scope.addContact = function(){
	  $scope.selContact = newContact;
	  $scope.contacts.push(newContact)
	  $scope.editMode = true;
  }
  $scope.editContact = function(){
	  $scope.editMode = true;
  }
  $scope.editContactDone = function(){
	  $scope.editMode = false;
  }
  $scope.orderProp = 'first_name';
  
}



function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];
