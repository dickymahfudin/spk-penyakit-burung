'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListGejala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Penyakit, {
        foreignKey: 'penyakitId',
        as: 'penyakit',
      });
      this.belongsTo(models.Gejala, {
        foreignKey: 'gejalaId',
        as: 'gejala',
      });
    }
  }
  ListGejala.init(
    {
      penyakitId: DataTypes.INTEGER,
      gejalaId: DataTypes.INTEGER,
      bobot: DataTypes.FLOAT,
      keterangan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ListGejala',
    }
  );
  return ListGejala;
};
