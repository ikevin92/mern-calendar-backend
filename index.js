const express = require('express');

// crear servidor de express
const app = express();
const port = 4000;


// Rutas de mi app
app.get('/', (req, res) => {

  res.json({ ok: true, msg: 'Hola mundo' });
});


// Arrancar el servidor y escuchar peticiones
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}!`));
