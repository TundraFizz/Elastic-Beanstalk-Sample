var express = require("express");         // Express
var app     = module.exports = express(); // Define the application
app.set("views", "./views");              // Define the views directory
app.use(express.static("./static"));      // Define the static directory
require("./node/routes.js");              // Include web routes third
app.listen(8081);                         // Start the server
