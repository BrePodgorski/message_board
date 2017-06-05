var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: {type: String, required: true},
  comment: {type: String, required: true},
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true});


mongoose.model('Comment', CommentSchema);
