const express = require("express");
const { validationResult } = require("express-validator");
const { response, request } = express;
const Usuario = require("../models/Usuario");
const bcrypt = require('bcrypt');


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

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

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

const loginUsuario = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe con ese correo'
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto'
      });
    }

    // Generar nuestro JWT
    // const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      // token
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });

  }
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
