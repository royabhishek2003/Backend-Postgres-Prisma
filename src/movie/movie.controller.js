// Movie Controllers — no model/database, using in-memory array

const movies = [];

// POST /movie/ — Add a new movie
const addMovie = (req, res) => {
  const { title, director, year } = req.body;

  if (!title || !director || !year) {
    return res.status(400).json({ error: "title, director, and year are required" });
  }

  const newMovie = {
    id: movies.length + 1,
    title,
    director,
    year,
  };

  movies.push(newMovie);
  res.status(201).json({ message: "Movie added successfully", movie: newMovie });
};

// GET /movie/ — Get all movies
const getAllMovies = (req, res) => {
  res.status(200).json({ movies });
};

// GET /movie/:id — Get a single movie by id
const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  res.status(200).json({ movie });
};

export { addMovie, getAllMovies, getMovieById };
