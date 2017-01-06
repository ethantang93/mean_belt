var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
  _creator:{ type:mongoose.Schema.ObjectId, ref:'User', required:true },
  question:{ type:String, required:true},
  option1:{ name:{ type:String, required:true }, count:{ type:Number, default:0 }},
  option2:{ name:{ type:String, required:true }, count:{ type:Number, default:0 }},
  option3:{ name:{ type:String, required:true }, count:{ type:Number, default:0 }},
  option4:{ name:{ type:String, required:true }, count:{ type:Number, default:0 }},
  created_at: { type: Date, default: Date.now() }
});
mongoose.model('Poll',PollSchema);
