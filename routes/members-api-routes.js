var db = require("../models");

module.exports = function(app) {
  // This will be used to pull all sessions categorized by the member that created the session/post
  app.get("/api/members", function(req, res) {
    db.Members.findAll({
      include: [db.Sessions]
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

  // This will be used to used to pull all upcoming posts from a specific member (clicking on one person in the members-pane)
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

  // This post will happen when a new user signs up
  app.post("/api/members", function(req, res) {
    db.Members.create(req.body).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

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

};
