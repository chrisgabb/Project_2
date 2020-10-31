const { escapeExpression } = require("handlebars");
var db = require("../models");
module.exports = function (app) {
  app.get("/api/sessionMember", function (req, res) {
    db.SessionMember.findAll().then(function (dbSessionMember) {
      res.json(dbSessionMember);
    });
  });
  app.post("/api/sessionMember", function (req, res) {
    db.SessionMember.create(req.body).then(function (dbSessionMember) {
      res.json(dbSessionMember);
    });
  });

  app.put("/api/sessionMember", function (req, res) {
    db.SessionMember.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbSessionMember) {
        res.json(dbSessionMember);
      });
  });
};