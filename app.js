const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const moviesRoutes = require('./routes/movies');

// Configuración
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/movies', moviesRoutes);
app.get('/', (req, res) => {
    res.redirect('/movies');
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
