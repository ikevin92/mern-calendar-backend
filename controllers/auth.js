const express = require("express");
const { validationResult } = require("express-validator");
const { response, request } = express;


const crearUsuario = (req = request, res = response) => {

  const { name, email, password } = req.body;

  // manejo de errores
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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

  // manejo de errores
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
