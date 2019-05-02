console.log("Enter app.js");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});