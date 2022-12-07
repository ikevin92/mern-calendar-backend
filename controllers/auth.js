const express = require("express");
const { validationResult } = require("express-validator");
const { response, request } = express;


const crearUsuario = (req = request, res = response) => {

  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password
  });
};

const loginUsuario = (req = request, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login'
  });
};

const revalidarToken = (req = request, res = response) => {

  res.json({
    ok: true,
    msg: 'renew'
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
};
