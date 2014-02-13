define([], function() {
    App.Model._ProductModel = Backbone.Model.extend({
        defaults: {
 
		 'name' : ''
 ,  
		 'value' : ''
 ,  
		 'marca' : ''
 ,  
		 'fechaExpedicion' : ''
 ,
                 'pista' : ''
        },
        initialize: function() {
        },
        getDisplay: function(name) {
         return this.get(name);
        }
    });

    App.Model._ProductList = Backbone.Collection.extend({
        model: App.Model._ProductModel,
        initialize: function() {
        }

    });
    return App.Model._ProductModel;
});

App.Model.ProductModel = Backbone.Model.extend({
        initialize:function(parameters){
            this.on('invalid',function(model,error){
                Backbone.trigger('user-model-error', {error: error});
            });
        },
 
        validate: function(attrs, options) {
            if (attrs.name == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.value == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.marca == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.fechaExpedicion == '') {
                return "You must set a value in Attribute";
            }
            
            if (attrs.pista == '') {
                return "You must set a value in Attribute";
            }
        }        
        
        
    });