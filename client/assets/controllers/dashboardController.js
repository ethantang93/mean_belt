app.controller('dashboardController',['$scope','pollFactory',function($scope,pollFactory){
  var index = function(){
    pollFactory.index(function(returned_data){
      console.log("this is the index from customer controller",returned_data);
      $scope.polls = returned_data;
    });
  };
  $scope.polls = []
  index();
}])
