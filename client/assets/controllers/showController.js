app.controller('showController',['$routeParams','$scope','$location','userFactory','pollFactory',function($routeParams,$scope,$location,userFactory,pollFactory){
  var id = $routeParams.id
  console.log(id);
  pollFactory.GetPoll(id,function(result){
    console.log(result);
    $scope.poll = result;
    console.log("!!",$scope.poll)
  })

}])
