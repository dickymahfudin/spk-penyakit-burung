'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ListAnalisa, {
        foreignKey: 'analisaId',
        as: 'list',
      });
      this.belongsTo(models.Penyakit, {
        foreignKey: 'penyakitId',
        as: 'penyakit',
      });
    }
  }
  Analisa.init(
    {
      nama: DataTypes.STRING,
      penyakitId: DataTypes.INTEGER,
      hasil: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Analisa',
    }
  );
  return Analisa;
};
