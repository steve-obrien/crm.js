'use strict';

/* Controllers */
var newContact = function(){};
newContact.prototype.first_name = '';
newContact.prototype.last_name = '';

function ContactListCtrl($scope, $http) {
  $http.get('contacts/contacts.json').success(function(data) {
    $scope.contacts = data;
  });
  
  $scope.selContact = false;
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
	  var nc = {id:Math.random() ,first_name:'...', last_name:''};
	  $scope.contacts.push(nc);
	  $scope.selContact = nc;
	  $scope.editMode = true;
	  $('[ng-model="selContact.first_name"]').focus();
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
