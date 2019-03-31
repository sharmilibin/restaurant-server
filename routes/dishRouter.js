const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());


/// https://localhost:3000/dishes/ - route 1 
/// https://localhost:3000/dishes/1 - route 2


// put - update 
// post - create new 
// get - get
// delete - delete



dishRouter.route('/') // route 1
.get((req,res,next) => {
    res.end('get the dishes');
  })
  .post((req,res,next) => {
    res.end('dihes posted ',+req.body.name+ ' dishes are', +req.body.description);
  })
  .put((req,res,next) => {
    res.statusCode = 403;
    res.end('put not supported');
  })
  .delete((req,res,next) => {
    res.end('deleting dishes');
  });


  dishRouter.route('/:dishId') // dishid
 .get((req,res,next) => {
    res.end('Get  the dishes ' +req.params.dishId );
  })
 .post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
  })
  .put((req,res,next) => {
    res.write('will update the dishes ' +req.params.dishId );
    res.end('dishes updating : '+req.body.name+ 'details: ' +req.body.description);
  })
  .delete((req,res,next) => {
    res.end('deleting dish with ID: ' +req.params.dishId );
  
  });




  module.exports =dishRouter;
