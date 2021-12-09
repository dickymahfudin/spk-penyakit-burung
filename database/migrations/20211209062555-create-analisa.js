'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Analisas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      penyakitId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Penyakits',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      hasil: {
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
    const data = [{ nama: 'laporan', penyakitId: 1, hasil: 6.53, createdAt, updatedAt }];
    await queryInterface.bulkInsert('Analisas', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Analisas');
  },
};
