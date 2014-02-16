App.Delegate._PymeDelegate = App.Delegate.PymeDelegate (
    function getPymeDelegate(sdata, callback, callbackError) {
    $.ajax({
        url: 'http://localhost:8080/pyme.service.subsystem.web/webresources/Pyme'+sdata,
        method: 'GET',
        dataType: "json",
        contentType: "application/json"
        }).done(function(data) {
            callback(data);
        }).fail(function(error){
            callbackError(error);
        });
    }    
);