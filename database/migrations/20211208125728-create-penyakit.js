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
      saran: {
        type: Sequelize.STRING,
      },
      gambar: {
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
      {
        kode: 'P1',
        nama: 'Tetelo',
        saran:
          'Memisahkan Burung Yang Terduga Terinveksi Dari Kandang Puyuh Yang Masih Sehat. Dan Berikan Jamu Pada Puyuh Untuk Meningkatkan Anti-Body Secara Alami Dan Meningkatkan Nafsu Makan.',
        gambar: '/img/tetelo.png',
        createdAt,
        updatedAt,
      },
      {
        kode: 'P2',
        nama: 'Pilek dan snot',
        saran: 'Peternak Bisa Memakai Vaksin CDR/Coryza Aktif.',
        gambar: '/img/pilek.png',
        createdAt,
        updatedAt,
      },
      {
        kode: 'P3',
        nama: 'Berak Darah',
        saran:
          'Pemberian Vaksin Tersebut Bisa Langsung Dimasukkan Ke Mulut Puyuh Atau Lewat Air Minum. Dan Dapat Dilakukan Dengan Menjaga Sanitasi Kadang Puyuh.',
        gambar: '/img/berakdarah.png',
        createdAt,
        updatedAt,
      },
      {
        kode: 'P4',
        nama: 'Cacar Unggas',
        saran: 'Harus  Pisahkan Puyuh Yang Terinfeksi Lalu Berikan Vaksin Dipter.',
        gambar: '/img/cacar.png',
        createdAt,
        updatedAt,
      },
      {
        kode: 'P5',
        nama: 'Quail Bronchitis',
        saran: 'Memperbaiki Sanitasi Dan Memberi Pakan Berkualitas.',
        gambar: '/img/bronchitis.png',
        createdAt,
        updatedAt,
      },
    ];
    await queryInterface.bulkInsert('Penyakits', data);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Penyakits');
  },
};
