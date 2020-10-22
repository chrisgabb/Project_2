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
    description: {
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
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt1_timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt1_timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt2_timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt2_timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt3_timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    },
    Opt3_timeEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
        isAfter: Date.now()
      }
    }
  });
  Sessions.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Sessions.belongsToMany(models.Members, {
      through: "session_member",
      as: "members",
      foreignKey: "session_id",
    });
  };


return Sessions;
};


// console.log( Date.now())

// console.log(new Date(Date.now()))

// myDate = "2014/10/29 18:10:45";
// myDate = new Date(myDate);
// console.log(myDate)
// // sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
// // date = sdf.parse(myDate);
// milliseconds = myDate.getMilliseconds();
// console.log(milliseconds)