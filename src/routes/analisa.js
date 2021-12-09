const express = require('express');
const router = express.Router();
const { Gejala, Analisa, ListAnalisa, Penyakit, ListGejala } = require('../models');
const jsonToTable = require('../helper/jsonToTable');
const perhitungan = require('../helper/perhitungan');

router.get('/', async (req, res, next) => {
  const analisas = await Analisa.findAll({ include: ['list', 'penyakit'] });
  res.render('analisa/index', { title: 'Analisa' });
});

router.post('/', async (req, res, next) => {
  try {
    const { nama } = req.body;
    const listGejala = await Penyakit.findAll({
      include: [{ model: ListGejala, include: [{ model: Gejala, as: 'gejala', raw: true, nest: true }] }],
    });
    const inputs = [];
    const findAnalisa = await Analisa.findOne({ where: { nama } });
    console.log(findAnalisa);
    if (findAnalisa) {
      req.flash('error', 'Nama Tidak Boleh Sama');
      return res.redirect('/analisa');
    }
    for (const [key, value] of Object.entries(req.body)) {
      if (value > 0 && key !== 'nama') {
        inputs.push({ gejalaId: +key, bobot: +value });
      }
    }
    if (inputs.length === 0) {
      req.flash('error', 'Lengkapi Data Gejala');
      return res.redirect('/analisa');
    }
    const hitung = perhitungan({ listGejala, inputs });
    if (!hitung) {
      req.flash('error', 'Data Penyakit Tidak Di Temukan Gari Gejala Tersebut');
      return res.redirect('/analisa');
    }
    console.log(hitung);
    const dataPenyakit = { nama, penyakitId: hitung.result.id, hasil: hitung.pAkhir };
    const analisa = await Analisa.create(dataPenyakit);
    for (const iterator of inputs) {
      await ListAnalisa.create({ ...iterator, analisaId: analisa.id });
    }
    req.flash(
      'success',
      `Hasil pengujian maka diperoleh data burung puyuh dari system yaitu ${hitung.pAkhir}% terinfeksi penyakit ${hitung.result.nama} `
    );
    return res.redirect('/analisa');
  } catch (error) {
    req.flash('error', 'Data Penyakit Tidak Di Temukan Gari Gejala Tersebut');
    return res.redirect('/analisa');
  }
});

router.get('/table', async (req, res, next) => {
  const analisas = await Analisa.findAll({ include: ['list', 'penyakit'], order: [['id', 'ASC']] });
  const table = analisas.map(analisa => {
    return { id: analisa.id, nama: analisa.nama, penyakit: analisa.penyakit.nama, hasil: `${analisa.hasil}%` };
  });
  res.json(jsonToTable(table));
});

router.get('/form', async (req, res, next) => {
  const gejalas = await Gejala.findAll();
  res.render('analisa/form', { title: 'Analisa', gejalas });
});

router.get('/detail/:id', async (req, res, next) => {
  const { id } = req.params;
  const listGejala = await Penyakit.findAll({
    include: [{ model: ListGejala, include: [{ model: Gejala, as: 'gejala' }] }],
  });
  const analisa = await Analisa.findOne({
    where: { id },
    include: ['penyakit', { model: ListAnalisa, as: 'list', include: ['gejala'] }],
  });
  const inputs = analisa.list.map(input => {
    return { gejalaId: input.id, bobot: input.bobot, nama: input.gejala.nama };
  });
  const hitung = perhitungan({ listGejala, inputs });
  // return res.json(hitung);
  res.render('analisa/detail', { title: 'Analisa', analisa, hitung });
});

module.exports = router;
