app.controller('loginController',['$scope','$location','userFactory',function($scope,$location,userFactory){

  $scope.login = function(user){
    userFactory.AddUser(user,function(result){
      console.log("factory",result);
      if (result.result = 'duplicate'){
        userFactory.GetUser(user,function(result){
          console.log("result id",result._id)
          $scope.current_user_id = result._id
          $location.path('/dashboard')
        })
      }else{
        userFactory.GetUser(user,function(result){
          console.log("result id",result._id)
          $scope.current_user_id = result._id
          $location.path('/dashboard')
        })
      }
    })
  }


}])
