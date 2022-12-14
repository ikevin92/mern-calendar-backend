
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// crear servidor de express
const app = express();
const port = process.env.PORT || 4000;


// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Arrancar el servidor y escuchar peticiones
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}!`));
