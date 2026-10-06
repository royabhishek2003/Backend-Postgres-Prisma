import express from "express";
import movieRouter from "./movie/movie.router.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount movie router at /movie
app.use("/movie", movieRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
