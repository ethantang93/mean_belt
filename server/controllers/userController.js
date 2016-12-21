var mongoose = require('mongoose');
var user = mongoose.model('User');

function UserController(){
  this.index = function(req,res){
    user.find({},function(err,results){
      if(err){
        console.log(err);
      }else{
        console.log(results)
        res.json(results);
      };
    });
  };
  this.create = function(req,res){
    user.create(req.body,function(err,result){
      if(err){
        console.log("!!!!! error creating user object. duplicate");
        res.json({result:'duplicate'})
      }else{
        console.log("success creating user object",result);
        res.json(result);
      };
    });
  };
  this.find = function(req,res){
    console.log("user name",req.body.name)
    user.findOne({name:req.body.name},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("found the user")
        res.json(result)
      }
    })
  }
};
module.exports = new UserController();
