![CF](http://i.imgur.com/7v5ASc8.png) LAB 07 - A
=================================================

## Express Server

### Author: Aaron Ferris

### Links and Resourcesa
* [Submission](https://github.com/codefellows-js-401d29-aaron-ferris/lab-07-middleware/pull/1)
* [travis](https://travis-ci.com/codefellows-js-401d29-aaron-ferris/lab-07-middleware)

#### Documentation
At the moment none of these due to completion.
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `server.js`
##### Exported Values and Methods

###### `route a`
 sends out Route A

###### `route b`
 should send In route B.
 Should send out random squared number but that feature is not functional

###### `raiseErr`
 throws an error with a next.
 ##### IMPORTS
 * routes
 * noLocation
 * errorHandler
 * logger
 * routes

#### `routes`
##### Exported Values and Methods

###### `listens for input from node`
utilizes the following functions.

###### `use C`
Exports to index in order to be exported when logged .

###### `D`
Throws an error in the d route when started

#### `error.js`
##### Exported Values and Methods
exports an error message for  when a 500 error happens


#### `randomVal.js`
##### Exported Values and Methods
Exports a random value that gets used in B

#### `err404.js`
##### Exported Values and Methods
Exports a 404 error for incorrect paths

#### `timeLogger.js`
##### Exported Values and Methods
Logs the time on any call in the console

#### `square.js`
##### Exported Values and Methods
Should export a squared number for method used in b

#### `.env` requirements
* `jsdocs`
* `express`
* `jest`
* `eslint`
* `node`
* `PORT` - 3000

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
test not completed

#### UML
Link to an image of the UML for your application and response to events
