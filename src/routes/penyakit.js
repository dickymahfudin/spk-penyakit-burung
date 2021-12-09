const express = require('express');
const router = express.Router();
const { Penyakit } = require('../models');
const jsonToTable = require('../helper/jsonToTable');

router.get('/', (req, res, next) => {
  res.render('penyakit/index', { title: 'Penyakit' });
});

router.get('/table', async (req, res, next) => {
  const penyakits = await Penyakit.findAll({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] } });
  return res.json(jsonToTable(penyakits));
});

module.exports = router;
