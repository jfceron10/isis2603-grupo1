define([], function() {
    App.Model._ClientModel = Backbone.Model.extend({
        defaults: {
 
		 'name' : ''
 ,  
		 'lastname' : ''
 ,
                 'cc' : ''
 ,
                 'birthDate' : ''
        },
        initialize: function() {
        },
        getDisplay: function(name) {
         return this.get(name);
        }
    });

    App.Model._ClientList = Backbone.Collection.extend({
        model: App.Model._ClientModel,
        initialize: function() {
        }

    });
    return App.Model._ClientModel;
});

// Validacion de datos no sirve
 App.Model.ClientModel = Backbone.Model.extend({
        initialize:function(parameters){
            this.on('invalid',function(model,error){
                Backbone.trigger('user-model-error', {error: error});
            });
        },
 
        validate: function(attrs, options) {
            if (attrs.name == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.lastName == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.cc == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.birthDate == '') {
                return "You must set a value in Attribute";
            }
        }        
        
        
    });