import express from "express";
import { addMovie, getAllMovies, getMovieById } from "../controllers/movie.controller.js";

const movieRouter = express.Router();

// POST   /movie/       — add a movie
movieRouter.post("/", addMovie);

// GET    /movie/       — get all movies
movieRouter.get("/", getAllMovies);

// GET    /movie/:id    — get a movie by id
movieRouter.get("/:id", getMovieById);

export default movieRouter;
