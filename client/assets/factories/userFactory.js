app.factory('userFactory',['$http',function($http){
  function userFactory(){
    var _this = this;
    //
    // this.index = function(callback){
    //   $http.get('/orders').then(function(returned_data){
    //     orders = returned_data.data;
    //     callback(orders);
    //   });
    // };
    this.StoreUser = function(user,callback){
      var current_user = user;
      callback();
    }
    this.AddUser = function(user,callback){
      $http.post('/user',user).then(function(returned_data){
        console.log("after http request",returned_data.data);
        callback(returned_data.data);
      })
    }
    this.GetUser = function(user,callback){
      $http.post('/getuser',user).then(function(returned_data){
        callback(returned_data.data)
      })
    }
  }
  return new userFactory();
}])
