const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotoTour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Tour, { foreignKey: 'photoTourId' });
    }
  }
  PhotoTour.init(
    {
      img1: DataTypes.TEXT,
      img2: DataTypes.TEXT,
      img3: DataTypes.TEXT,
      img4: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'PhotoTour',
    }
  );
  return PhotoTour;
};
