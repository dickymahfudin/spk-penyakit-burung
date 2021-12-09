const express = require('express');
const router = express.Router();
const { Gejala, ListGejala, Penyakit } = require('../models');
const jsonToTable = require('../helper/jsonToTable');

router.get('/', async (req, res, next) => {
  const lists = await Penyakit.findAll({
    include: [{ model: ListGejala, include: [{ model: Gejala, as: 'gejala' }] }],
  });
  return res.render('listPenyakit/index', { title: 'List', lists });
});

module.exports = router;
