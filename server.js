var express = require("express");
var app = express();
var port = process.env.port || 5000;

var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());

var login = require('./Controller/Login')();
app.use("/api/login", login);

app.listen(port, function(){
    var datetime = new Date();
    var message = "Server running on port:-" + port + ", Started at :-" + datetime
    console.log(message);
}
);