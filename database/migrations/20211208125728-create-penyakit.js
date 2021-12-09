'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Penyakits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kode: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
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
      { kode: 'P1', nama: 'Tetelo', createdAt, updatedAt },
      { kode: 'P2', nama: 'Pilek dan snot', createdAt, updatedAt },
      { kode: 'P3', nama: 'Berak Darah', createdAt, updatedAt },
      { kode: 'P4', nama: 'Cacar Unggas', createdAt, updatedAt },
      { kode: 'P5', nama: 'Quail Bronchitis', createdAt, updatedAt },
    ];
    await queryInterface.bulkInsert('Penyakits', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Penyakits');
  },
};
