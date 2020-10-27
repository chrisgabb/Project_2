// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// ********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  
  // GET route for getting all of the posts
  app.get("/api/sessions", function(req, res) {
    db.Sessions.findAll({
      include: [{
        model: db.Members,
          as: "members"
    }]
    }).then(function(dbSessions) {
      res.json(dbSessions);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/sessions/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Sessions.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Members]
    }).then(function(dbSessions) {
      res.json(dbSessions);
    });
  });
  // POST route for saving a new post
  app.post("/api/sessions", function(req, res) {
    db.Sessions.create(req.body).then(function(dbSessions) {
      res.json(dbSessions);
    });
  });
  // DELETE route for deleting posts
  app.delete("/api/sessions/:id", function(req, res) {
    db.Sessions.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSessions) {
      res.json(dbSessions);
    });
  });
  // PUT route for updating posts
  app.put("/api/sessions", function(req, res) {
    db.Sessions.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSessions) {
      res.json(dbSessions);
    });
  });
};
