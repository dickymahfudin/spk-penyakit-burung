'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ListGejalas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      keterangan: {
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
      { penyakitId: 1, gejalaId: 1, bobot: 1.5, keterangan: 'Ringan ', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 2, bobot: 1.5, keterangan: 'Ringan ', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 3, bobot: 2.5, keterangan: 'Sedang ', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 4, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 5, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 6, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 7, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 1, gejalaId: 8, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 3, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 1, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 9, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 10, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 11, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 2, gejalaId: 12, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 3, gejalaId: 13, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 3, gejalaId: 14, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 3, gejalaId: 15, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 3, gejalaId: 16, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 4, gejalaId: 17, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 4, gejalaId: 18, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 4, gejalaId: 13, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 4, gejalaId: 19, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 4, gejalaId: 20, bobot: 3.5, keterangan: 'Parah', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 3, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 19, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 21, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 22, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 5, bobot: 2.5, keterangan: 'Sedang', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 1, bobot: 1.5, keterangan: 'Ringan', createdAt, updatedAt },
      { penyakitId: 5, gejalaId: 23, bobot: '3.5', keterangan: 'Parah', createdAt, updatedAt },
    ];
    await queryInterface.bulkInsert('ListGejalas', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ListGejalas');
  },
};
