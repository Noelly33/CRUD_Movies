const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
    try {
        const [movies] = await Movie.fetchAll();
        res.render('movies/index', { movies });
    } catch (error) {
        res.status(500).send('Error al obtener las películas: ' + error.message);
    }
};

exports.getMovieForm = (req, res) => {
    res.render('movies/create');
};

exports.createMovie = async (req, res) => {
    const { title, genre, year } = req.body;
    try {
        await Movie.create(title, genre, year);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Error al crear la película: ' + error.message);
    }
};

exports.getEditForm = async (req, res) => {
    const id = req.params.id;
    try {
        const [movie] = await Movie.findById(id);
        if (movie.length === 0) {
            return res.status(404).send('Película no encontrada');
        }
        res.render('movies/edit', { movie: movie[0] });
    } catch (error) {
        res.status(500).send('Error al obtener los datos de la película: ' + error.message);
    }
};

exports.updateMovie = async (req, res) => {
    const id = req.params.id;
    const { title, genre, year } = req.body;
    try {
        await Movie.update(id, title, genre, year);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Error al actualizar la película: ' + error.message);
    }
};

exports.deleteMovie = async (req, res) => {
    const id = req.params.id;
    try {
        await Movie.delete(id);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Error al eliminar la película: ' + error.message);
    }
};

