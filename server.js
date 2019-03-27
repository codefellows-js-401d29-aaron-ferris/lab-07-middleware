'use strict';

const express = require('express');
const routes = require('./routes.js')
const noLocation = require('./err404.js');
const errorHandler = require('./error.js');
const logger = require('./timeLogger.js');

const app = express();

const PORT = process.env.PORT || 3000;
// const square = (number, (req, res)) => {

// }
const raiseErr = (req, res,  next)=> {
  next(err)
}
app.use(logger);
app.use(routes);
app.use('/b', squared);



app.get('/a', (req,res, next) => {
  console.log('In /a route')
  res.status(200);
  res.send(`Route A`);
});

app.get('/b', (req,res, next) => {
  console.log('In B route')
  res.status(200)
  res.send('Route B', res.square(Math.ciel(10*Math.random())));
  
});



app.use('*', noLocation);

app.use(errorHandler)

app.listen(3000);

