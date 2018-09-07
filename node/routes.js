var app = require("../app.js");
var fs  = require("fs"); // File system library

app.get("/", function(req, res){
  res.render("index.ejs");

  // var string = "A string from the server.";
  // var people = [
  //   {name: "Adam", age: 10},
  //   {name: "Bob",  age: 12},
  //   {name: "Carl", age: 15}
  // ];

  // res.render("index.ejs", {
  //   people: people,
  //   string: string
  // });
});

// app.use(function (req, res){
//   res.render("404.ejs");
// });
