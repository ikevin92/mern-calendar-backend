const express = require("express");
const { validationResult } = require("express-validator");
const { response, request } = express;
const Usuario = require("../models/Usuario");


const crearUsuario = async (req = request, res = response) => {

  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese correo'
      });
    }

    usuario = new Usuario(req.body);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });
  }

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
