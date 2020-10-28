module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
      // Giving the Members model a name of type STRING

 email:{
    type: DataTypes.STRING,
   },
   password:{
    type: DataTypes.STRING,
    validate:{
    }
   }
});
Login.associate = function (models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Login.belongsTo(models.Members, {
    foreignKey: {
      allowNull: false
    }
  });
};

return Login;
};
<<<<<<< HEAD
  var Login = sequelize.define("Login", {
    // Giving the Members model a name of type STRING

userName:{
  type: DataTypes.STRING,
 },
 password:{
  type: DataTypes.STRING,
  validate:{
  }
 }
});
Login.associate = function (models) {
// We're saying that a Post should belong to an Author
// A Post can't be created without an Author due to the foreign key constraint
Login.belongsTo(models.Members, {
  foreignKey: {
    allowNull: false
  }
});
};

return Login;
};
=======
>>>>>>> 5decbb26de24b51c9eb04ffab03e17e51290b6ac
