const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Region, { foreignKey: "regionId" });
      this.hasMany(models.History, { foreignKey: "tourId" });
      this.belongsTo(models.PhotoTour, { foreignKey: "photoTourId" });
      this.belongsToMany(models.User, {
        through: "Basket",
        foreignKey: "tourId",
      });
      this.hasMany(models.Basket, { foreignKey: "tourId" });
    }
  }
  Tour.init(
    {
      name: DataTypes.TEXT,
      body: DataTypes.TEXT,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      currentPlace: DataTypes.INTEGER,
      allPlace: DataTypes.INTEGER,
      date: DataTypes.TEXT,
      days: DataTypes.TEXT,
      regionId: DataTypes.INTEGER,
      photoTourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tour",
    }
  );
  return Tour;
};
