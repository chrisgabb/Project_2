module.exports = function (sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    // Giving the Members model a name of type STRING
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
  });

  Members.associate = function (models) {
   
    Members.belongsToMany(models.Sessions, {
      through: "session_member",
      as: "sessions",
      foreignKey: "member_id",
    });
  };

  return Members;
};
