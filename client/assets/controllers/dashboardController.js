app.controller('dashboardController',['$scope','pollFactory','userFactory',function($scope,pollFactory,userFactory){
  var index = function(){
    pollFactory.index(function(returned_data){
      console.log("this is the index from customer controller",returned_data);
      $scope.polls = returned_data;
    });
  };
  $scope.polls = []
  index();
  var user = userFactory.GetUser();

  console.log("!!!!",user)
}])
