'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ListAnalisas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      analisaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Analisas',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      gejalaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Gejalas',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      bobot: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    const createdAt = new Date();
    const updatedAt = new Date();
    const data = [
      { analisaId: 1, gejalaId: 1, bobot: 0.8, createdAt, updatedAt },
      { analisaId: 1, gejalaId: 2, bobot: 0.8, createdAt, updatedAt },
      { analisaId: 1, gejalaId: 3, bobot: 1, createdAt, updatedAt },
      { analisaId: 1, gejalaId: 4, bobot: 0.8, createdAt, updatedAt },
    ];
    await queryInterface.bulkInsert('ListAnalisas', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ListAnalisas');
  },
};
