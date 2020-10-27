var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  app.get("/api/members", function(req, res) {

    db.Members.findAll({
      include: [{
        model: db.Sessions,
          as: "sessions"
    }]
=======
  // This will be used to pull all sessions categorized by the member that created the session/post
  app.get("/api/members", function(req, res) {
    db.Members.findAll({
      include: [db.Sessions]
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

<<<<<<< HEAD
=======
  // This will be used to used to pull all upcoming posts from a specific member (clicking on one person in the members-pane)
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
  app.get("/api/members/:id", function(req, res) {

    db.Members.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Sessions]
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

<<<<<<< HEAD
=======
  // This post will happen when a new user signs up
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
  app.post("/api/members", function(req, res) {
    db.Members.create(req.body).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

<<<<<<< HEAD
  app.delete("/api/members/:id", function(req, res) {
    db.Members.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });
=======
  // This delete will delete a member... Not sure where this will be used.....
  // app.delete("/api/members/:id", function(req, res) {
  //   db.Members.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbMembers) {
  //     res.json(dbMembers);
  //   });
  // });
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f

};
