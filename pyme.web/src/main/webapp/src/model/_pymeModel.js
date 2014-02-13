define([], function() {
    App.Model._PymeModel = Backbone.Model.extend({
        defaults: {
 
		 'name' : ''
 ,  
		 'description' : ''
 ,  
		 'direccion' : ''
 ,  
		 'telefono' : ''               
                 
        },
        initialize: function() {
        },
        getDisplay: function(name) {
         return this.get(name);
        }
    });

    App.Model._PymeList = Backbone.Collection.extend({
        model: App.Model._PymeModel,
        initialize: function() {
        }

    });
    return App.Model._PymeModel;
});

App.Model.PymeModel = Backbone.Model.extend({
        initialize:function(parameters){
            this.on('invalid',function(model,error){
                Backbone.trigger('user-model-error', {error: error});
            });
        },
 
        validate: function(attrs, options) {
            if (attrs.name == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.description == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.direccion == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.telefono == '') {
                return "You must set a value in Attribute";
            }           
            
        }        
        
        
    });