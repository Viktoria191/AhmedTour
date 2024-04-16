const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: "roleId" });

      this.belongsToMany(models.Tour, {
        through: "Basket",
        foreignKey: "userId",
      });

      this.hasMany(models.Comment, { foreignKey: "userId" });
      this.hasMany(models.History, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
