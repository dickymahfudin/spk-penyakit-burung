'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListAnalisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Analisa, {
        foreignKey: 'analisaId',
        as: 'analisa',
      });
      this.belongsTo(models.Gejala, {
        foreignKey: 'gejalaId',
        as: 'gejala',
      });
    }
  }
  ListAnalisa.init(
    {
      analisaId: DataTypes.INTEGER,
      gejalaId: DataTypes.INTEGER,
      bobot: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'ListAnalisa',
    }
  );
  return ListAnalisa;
};
