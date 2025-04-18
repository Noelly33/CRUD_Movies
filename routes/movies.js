const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController');

// Rutas existentes
router.get('/', MovieController.getAllMovies);
router.get('/create', MovieController.getMovieForm);
router.post('/create', MovieController.createMovie);
router.get('/delete/:id', MovieController.deleteMovie);

// Nuevas rutas para editar película
router.get('/edit/:id', MovieController.getEditForm); // Formulario de edición
router.post('/edit/:id', MovieController.updateMovie); // Actualizar película

module.exports = router;

