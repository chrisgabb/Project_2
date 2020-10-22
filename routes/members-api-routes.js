var db = require("../models");

module.exports = function(app) {
  app.get("/api/members", function(req, res) {

    db.Members.findAll({
      include: [{
        model: db.Sessions,
          as: "sessions"
    }]
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

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

  app.post("/api/members", function(req, res) {
    db.Members.create(req.body).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

  app.delete("/api/members/:id", function(req, res) {
    db.Members.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMembers) {
      res.json(dbMembers);
    });
  });

};
