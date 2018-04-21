	// Dependencies
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var port = process.env.PORT || 8080;
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
app.use(bodyParser.json());


app.get("*", function(req, res) {
 res.sendFile(path.join(__dirname, "./public/index.html"));
}); 


app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
