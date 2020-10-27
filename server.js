// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
<<<<<<< HEAD
=======

>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

<<<<<<< HEAD
var db = require("./models");
var exphbs = require("express-handlebars");

// Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")
=======
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
<<<<<<< HEAD
// Routes
// =============================================================
const htmlroutes = require("./routes/html-routes.js");

app.use(htmlroutes)

// require("./routes/members-api-routes.js")(app);
// require("./routes/sessions-api-routes.js")(app);

=======

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/members-api-routes.js")(app);
require("./routes/sessions-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
