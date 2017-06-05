var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
module.exports = {
  index: (req,res)=>{
    Message.find({}).populate('comments').exec((err, messages)=>{
      if(err){
        cosole.log(err);
        return;
      }else{
        console.log("Messages with populate", messages);
        res.render('index', {messages: messages})
      }
    })
    Message.find({}, (err, messages)=>{

      if(err){
        cosole.log(err);
        return;
      }else{
        console.log("Messages without populate",messages);
        // res.render('index', {messages: messages})
      }
    })
  },
  create: (req,res)=>{
    //serve as our post route to create new message
    var message = new Message(req.body);

    message.save(function(err){
      if(err){
        console.log(err);
        return;

      }
      res.redirect('/');
    })
  },
  createComment: (req,res)=>{
    //find the message we're posting a comment to. if it exists...
    Message.findOne({_id: req.params.id}, (err, message) =>{
      if(err){
        console.log(err);
        return;
      }else{
        var comment = new Comment(req.body);
        comment._message = message._id;
      //add mesage as id of message that we found
      //taking id with message and saving it into the arr
        comment.save( (err,savedComment) =>{
          if(err){
            console.log(err);
            return;
        //then we save comment
          }else{
            message.comments.push(savedComment);
            message.save((err, data) =>{
          //then we'll push it into the array of comments and save it
              if(err){
                console.log(err);
                return;
              }else{
                res.redirect('/');
              }
            })
          }

        })
      }
    })
  }
}
