const express = require("express");
const { response, request } = express;


const crearUsuario = (req = request, res = response) => {

  res.json({
    ok: true,
    msg: 'registro'
  });
};

const loginUsuario = (req = request, res = response) => {
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
