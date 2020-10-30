module.exports = function (sequelize, DataTypes) {
    var SessionMember = sequelize.define("SessionMember", {
    },{
        tableName:'session_member'
     });
    return SessionMember;
  };
  