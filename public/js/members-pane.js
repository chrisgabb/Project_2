var db = require("../models");

module.exports = function(app) {
  app.get("/api/members", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Members.findAll({
      include: [db.Session]
    }).then(function(dbMember) {
      res.json(dbMember);
    });
  });

};