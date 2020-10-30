module.exports = function (sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  Members.associate = function (models) {
    Members.belongsToMany(models.Sessions, {
      through: models.SessionMember,
      as: "sessions",
      foreignKey: "member_id",
    });
  };
  return Members;
};