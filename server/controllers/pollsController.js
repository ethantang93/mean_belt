var mongoose = require('mongoose');
var poll = mongoose.model('Poll');

function PollController(){
  this.index = function(req,res){
    poll.find({})
    .populate('_creator')
    .exec(function(err,result){
      if(err){
        res.json(err);
      }else{
        res.json(result);
      }
    })
  };
  this.create = function(req,res){
    poll.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating poll object",result);
        res.json(result);
      };
    });
  };
  this.find = function(req,res){
    console.log(req.params.id)
    poll.findOne({_id:req.params.id},function(err,result){
      if(err){
        console.log(err)
      }else{
        console.log("found the poll object")
        res.json(result);
      };
    });
  }
};
module.exports = new PollController();
