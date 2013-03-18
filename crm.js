Contacts = new Meteor.Collection('contacts');

if (Meteor.isClient) {
	Template.contacts.contacts = function(){
		return Contacts.find({}, {sort: {name: 1}, limit: 100});
	}
	Template.contacts.count = function(){
		return Contacts.find().count();
	}
	Template.contacts.events({
		'click input' : function(){
			var id = Contacts.insert({name:'unknown'});
			Session.set('contact_selected_id', id);
			Session.set('contact_edit', true);
		}
	});
  
	Template.contact_list_item.events({
		'click' : function(){
			Router.setContact(this._id);
		}
	})
  
  Template.contact.contact = function(){
	  return Contacts.findOne(Session.get('contact_selected_id'));
  }
  Template.contact.events({
	  'click .edit':function(evt){
	  	Session.set("contact_edit",true);
	  },
	  'click .delete':function(evt){
		  Contacts.remove(Session.get('contact_selected_id'))
		 // alert(this.contact);
	  }
  })
 
  Template.contact.editContact = function(){
	  return Session.get('contact_edit');
  }
  
  Template.contact_edit.events({
	  'click .cancel':function(){
	  	Session.set("contact_edit",false);
	  },
	  'change .name':function(evt){
		  var name = $(evt.currentTarget).val();
	  	  Contacts.update({_id:Session.get('contact_selected_id')}, {$set: {name:name}});
	  }
  })
  Template.contact_edit.contact = function(){
	  return Contacts.findOne(Session.get('contact_selected_id'));
  }
  
  ////////// Tracking selected list in URL //////////

  var ContactsRouter = Backbone.Router.extend({
    routes: {
      ":contact_id": "main"
    },
    main: function (contact_id) {
      Session.set("contact_selected_id", contact_id);
    },
    setContact: function (contact_id) {
      this.navigate(contact_id, true);
    }
  });

  Router = new ContactsRouter;

  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });
  
}

if (Meteor.isServer) {
	 Contacts.remove()
  Meteor.startup(function () {
	 
    // code to run on server at startup
  });
}




