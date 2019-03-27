'use strict';
const express = require('express');
const app = express();

const router = express.Router();
const randomVal = require('./randomVal.js');

const raiseErr = (req, res,  next)=> {
  next(err)
}


app.use('/c',randomVal);
app.get('/c', (req,res, next ) => {
  console.log('In C route')
  res.status(200).send('Route C');
});

app.get('/d',raiseErr, (req,res, next) => {
  console.log('In D route')
  res.status(200).send('Route D');
 }); 

 module.exports = router;
