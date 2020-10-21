module.exports = function(sequelize, DataTypes) {
    var Members = sequelize.define("Members", {
      // Giving the Members model a name of type STRING
      first_name: {
         type: DataTypes.STRING,
      },
      last_name:{
        type: DataTypes.STRING,
      },
      userName:{
        type: DataTypes.STRING,
       },
       password:{
        type: DataTypes.STRING,
        validate:{
            
        }
       }
    });
  
    Members.associate = function(Request) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Members.hasMany(request.Post, {
        onDelete: "cascade"
      });
    };
  
    return Member;
  };
  