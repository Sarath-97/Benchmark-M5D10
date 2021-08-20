import express from "express";
import uniqid from "uniqid";
import { getMovies, writeMovies } from "../../lib/fs-tools.js";

const moviesRouter = express.Router();

moviesRouter.post("/", async (req, res, next) => {
  try {

      const movies = await getMovies();

      const newMovie = { id: uniqid(), ...req.body, createdAt: new Date(),updatedAt: new Date() };
  
      movies.push(newMovie);
  
      await writeMovies(movies);
  
      res.status(201).send(newMovie);

  } catch (error) {
    next(error);
  }
})

moviesRouter.get("/",async (req, res, next) => {

    console.log("Qurey params = ", req.query);

    const movies = await getMovies();

    if (req.query && req.query.category) {
      const filteredMovies = movies.filter((m) => m.category === req.query.category);
      res.send(filteredMovies);
    } else {
      res.send(movies);
    }
  });

moviesRouter.get("/:id",  async (req, res, next) => {
    const movies = await getMovies()

    const movie = movies.find(m => m.id === req.params.id)

    res.send(movie)
  });

moviesRouter.put("/:id", async (req, res, next) => {
  
  try {
    const movies = await getMovies();

    const remainingMovies = movies.filter((m) => m.id !== req.params.id);

    const modifiedMovie = { id: req.params.id, ...req.body,"createdAt": new Date(),"updatedAt": new Date() };

    remainingMovies.push(modifiedMovie);

    await writeMovies(remainingMovies);

    res.send(modifiedMovie);
  } catch (error) {
    next(error);
  }
  });

moviesRouter.delete("/:id", async (req, res, next) => {
  try {
    const movies = await getMovies();

    const remainingMovies = movies.filter((b) => b.id !== req.params.id);

    await writeMovies(remainingMovies);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
  });

export default moviesRouter
