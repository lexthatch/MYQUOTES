app.factory("quoteService", function($http){
    var service = {
        getQuote: function(){
            return "This is a static quote from service"
        },
        loadQuote: function(){
            
        }
    }
    return service;
})