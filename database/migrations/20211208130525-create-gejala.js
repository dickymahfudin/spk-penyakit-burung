'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gejalas', {
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
      { kode: 'G1', nama: 'Bersin', createdAt, updatedAt },
      { kode: 'G2', nama: 'Mendengkur', createdAt, updatedAt },
      { kode: 'G3', nama: 'Lesu', createdAt, updatedAt },
      { kode: 'G4', nama: 'Mata Ngantuk', createdAt, updatedAt },
      { kode: 'G5', nama: 'Batuk-Batuk', createdAt, updatedAt },
      { kode: 'G6', nama: 'Ganguan Pernafasan', createdAt, updatedAt },
      { kode: 'G7', nama: 'Kotoran Encer Kehijauan', createdAt, updatedAt },
      { kode: 'G8', nama: 'Lumpuh', createdAt, updatedAt },
      { kode: 'G9', nama: 'Kurus', createdAt, updatedAt },
      { kode: 'G10', nama: 'Air Mata Sering Keluar', createdAt, updatedAt },
      { kode: 'G11', nama: 'Mata Merah', createdAt, updatedAt },
      { kode: 'G12', nama: 'Mata Bengkak', createdAt, updatedAt },
      { kode: 'G13', nama: 'Nafsu Makan Berkurang', createdAt, updatedAt },
      { kode: 'G14', nama: 'Mencret', createdAt, updatedAt },
      { kode: 'G15', nama: 'Menggigil', createdAt, updatedAt },
      { kode: 'G16', nama: 'Berat Badan Mengalami Penurunan', createdAt, updatedAt },
      { kode: 'G17', nama: 'Kopeng-Kopeng Pada Bagian Tidak Berbulu', createdAt, updatedAt },
      { kode: 'G18', nama: 'Bila Dilepas Keluar Darah', createdAt, updatedAt },
      { kode: 'G19', nama: 'Bulu Napak Kusam', createdAt, updatedAt },
      { kode: 'G20', nama: 'Sayap Terkulai', createdAt, updatedAt },
      { kode: 'G21', nama: 'Mata Dan Hidung Keluar Lendir', createdAt, updatedAt },
      { kode: 'G22', nama: 'Tubuh gemetar', createdAt, updatedAt },
      { kode: 'G23', nama: 'Kepala dan leher Terpuntir', createdAt, updatedAt },
    ];
    await queryInterface.bulkInsert('Gejalas', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gejalas');
  },
};
