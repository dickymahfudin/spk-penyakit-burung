const express = require('express');
const router = express.Router();
const { Gejala, Analisa, ListAnalisa, Penyakit, ListGejala } = require('../models');
const jsonToTable = require('../helper/jsonToTable');

router.get('/', async (req, res, next) => {
  res.render('login', { title: 'Login', layout: 'layouts/blank' });
});

router.post('/', async (req, res, next) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    req.flash('success', 'Login Berhasil');
    req.session.login = true;
    return res.redirect('/dashboard');
  }
  req.flash('error', 'Username atau Password Salah');
  res.redirect('/login');
});

router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
  });
  res.redirect('/login');
});

module.exports = router;
