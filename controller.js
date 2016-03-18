app.controller("igorController",function($scope, quoteService){
    $scope.Quote = "Test";
    $scope.getQuote = function(){
        quoteService.getQuote();        
    }
})