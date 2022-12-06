
const express = require('express');
require('dotenv').config();

// crear servidor de express
const app = express();
const port = process.env.PORT || 4000;


// Directorio publico
app.use(express.static('public'));



// Rutas de mi app
app.use('/api/auth', require('./routes/auth'));
// TODO: crud:eventos



// Arrancar el servidor y escuchar peticiones
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}!`));
