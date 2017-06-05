var controller = require('./../controllers/controller');

module.exports = (app)=>{
  app.get('/',controller.index);
  app.post('/messages', controller.create);
  app.post('/comments/:id', controller.createComment);
  //creating the message

  //app.method(route, callback) <-format for all of these methods
}
