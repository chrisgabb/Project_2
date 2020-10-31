module.exports = function (sequelize, DataTypes) {
  var Sessions = sequelize.define("Sessions", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    typeOfSession: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    membersLimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      len: [1]
    },
    timeStart: {
      type: DataTypes.TEXT,
      allowNull: true,
      
    },
    timeEnd: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Opt1_timeStart: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    },
    Opt1_timeEnd: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    },
    Opt2_timeStart: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    },
    Opt2_timeEnd: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    },
    Opt3_timeStart: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    },
    Opt3_timeEnd: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
      }
    }
  });
  Sessions.associate = function (models) {
    Sessions.belongsToMany(models.Members, {
      through: models.SessionMember,
      as: "members",
      foreignKey: "session_id",
    });
  };
return Sessions;
};

