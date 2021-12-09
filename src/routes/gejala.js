const express = require('express');
const router = express.Router();
const { Gejala } = require('../models');
const jsonToTable = require('../helper/jsonToTable');

router.get('/', (req, res, next) => {
  res.render('gejala/index', { title: 'Gejala' });
});

router.get('/table', async (req, res, next) => {
  const gejalas = await Gejala.findAll({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] } });
  return res.json(jsonToTable(gejalas));
});

module.exports = router;
