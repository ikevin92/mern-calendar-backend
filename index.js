
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// crear servidor de express
const app = express();
const port = process.env.PORT || 4000;


// Base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// Rutas de mi app
app.use('/api/auth', require('./routes/auth'));
// TODO: crud:eventos

// Arrancar el servidor y escuchar peticiones
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}!`));
