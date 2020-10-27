module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
    var Members = sequelize.define("Members", {
      // Giving the Members model a name of type STRING
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    });
  
    Members.associate = function (models) {
      Members.hasOne(models.Login, {
        foreignKey: {
          allowNull: false
        }
      });
      Members.belongsToMany(models.Sessions, {
        through: "session_member",
        as: "sessions",
        foreignKey: "member_id",
      });
    };
  
    return Members;
  };
>>>>>>> 08581c35231c9a838e7169da7832507711191f9f
