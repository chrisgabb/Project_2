module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
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

  Login.belongsTo(models.Members, {
    foreignKey: {
      allowNull: false
    }
  });
};

return Login;
};
