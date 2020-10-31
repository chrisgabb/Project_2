// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// Sets up the Express App
// =============================================================
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 8080;
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log(`App listening on PORT`+ PORT)
  });
});
if (process.env.NODE_ENV === "production"){
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/members-api-routes.js")(app);
require("./routes/sessions-api-routes.js")(app);
require("./routes/session-memeber-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});