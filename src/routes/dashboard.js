const express = require('express');
const router = express.Router();
const { Gejala, Analisa, ListAnalisa, Penyakit, ListGejala } = require('../models');
const jsonToTable = require('../helper/jsonToTable');

router.get('/', async (req, res, next) => {
  const gejala = await Gejala.findAll();
  const penyakit = await Penyakit.findAll();
  const daftarPenyakit = await ListGejala.findAll();
  const analisa = await Analisa.findAll();
  res.render('dashboard', { title: 'Dashboard', gejala, penyakit, daftarPenyakit, analisa });
});

router.get('/table', async (req, res, next) => {
  const gejalas = await Gejala.findAll({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] } });
  return res.json(jsonToTable(gejalas));
});

module.exports = router;
