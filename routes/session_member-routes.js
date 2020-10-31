var db = require("../models");

module.exports = function(app) {
  app.get("/api/session_member", function(req, res) {

    db.session_member.findAll().then(function(dbsession_member) {
      res.json(dbsession_member);
    });
  });
}