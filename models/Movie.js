const db = require('../config/database');

class Movie {
    static fetchAll() {
        return db.execute('SELECT * FROM movies');
    }

    static findById(id) {
        return db.execute('SELECT * FROM movies WHERE id = ?', [id]);
    }

    static create(title, genre, year) {
        return db.execute(
            'INSERT INTO movies (title, genre, year) VALUES (?, ?, ?)',
            [title, genre, year]
        );
    }

    static update(id, title, genre, year) {
        return db.execute(
            'UPDATE movies SET title = ?, genre = ?, year = ? WHERE id = ?',
            [title, genre, year, id]
        );
    }

    static delete(id) {
        return db.execute('DELETE FROM movies WHERE id = ?', [id]);
    }
}

module.exports = Movie;
