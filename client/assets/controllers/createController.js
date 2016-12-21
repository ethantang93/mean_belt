app.controller('createController',['$location','$scope','pollFactory',function($location,$scope,pollFactory){

  $scope.AddPoll = function(poll){
    pollFactory.AddPoll(poll,function(returned_data){
      console.log(returned_data)
    });
  }


}])
