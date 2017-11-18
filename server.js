'use strict';

var restify = require('restify');
var  fs = require('fs');

/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

//configuration
mongoose.connect(configDB.url,{ useMongoClient: true }); // connect to our database


var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})
 
 var server = restify.createServer();
 
server
    .use(restify.plugins.fullResponse())
    .use(restify.plugins.bodyParser())



/*Set global varibale for views*/
global.env = process.env;


 // routes ======================================================================
require('./config/routes.js')(server,controllers); // load our routes and pass in our app and fully configured passport

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})
 
if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    })
