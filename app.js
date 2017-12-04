//require Express
var express = require('express');
//need to initialize express
var app = express();
//path to get files to send to browser
var path = require('path');

var routes = require('./api/routes')

var bodyParser = require('body-parser')

//espress application variables, app.set and app.get
app.set('port', 3000);



//define static folder
//checks if the requested file is in the public folder
//without needing to add any extra routes
//middleware

//log the requests coming in
//outputs to he console requests to the express server
app.use(function(req, res, next){
    console.log(req.method , req.url);
    next();

});

//look in folder public for index.html
app.use(express.static(path.join(__dirname,'public')))

//middleware for posting forms
app.use(bodyParser.urlencoded({extended : false}))


app.use('/api' , routes);


//listen for requests
//app.listen returns an object
var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log(`magic happens on ${port}`)
});



