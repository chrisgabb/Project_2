var db = require("../models");
module.exports = function(app) {
  app.get("/api/sessionMember", function(req, res) {
    db.SessionMember.findAll().then(function(dbSessionMember) {
      res.json(dbSessionMember);
    });
  });
}