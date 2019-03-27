'use strict';

/**
 * Super simple middleware that just logs out its existence.
 * @param req
 * @param res
 * @param next
 */
module.exports = (req,res,next) => {
  req.requestTime = {requestTime: new Date().toLocaleString()};
  console.log( `Navigated to ${req.path} @`, req.requestTime, `and used ${req.method}` )
  next();
};
