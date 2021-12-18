'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ListGejala, {
        foreignKey: 'penyakitId',
      });
    }
  }
  Penyakit.init(
    {
      kode: DataTypes.STRING,
      nama: DataTypes.STRING,
      saran: DataTypes.STRING,
      gambar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Penyakit',
    }
  );
  return Penyakit;
};
