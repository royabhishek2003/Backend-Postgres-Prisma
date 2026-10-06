import express from "express";
import movieRouter from "./routes/movie.router.js";
import authRouter from "./routes/auth.router.js"
import {config} from "dotenv"
import {connectDb, disconnectDb, prisma} from "./config/db.js"
config();
connectDb();
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount movie router at /movie
app.use("/movie", movieRouter);
app.use("/auth",authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

// three situation where db disconnect is always used 

process.on("unhandledRejection", (err)=>{
  console.error("unhandled rejection: ", err);
  server.close(async()=>{
    await disconnectDb();
    process.exit(1);

  });
});


process.on("uncaughtException",async (err)=>{
    console.error("Uncaught Exception: ",err);
    await disconnectDb();
    process.exit(1);
});

// graceful shutdown 
process.on("SIGTERM", async()=>{
  console.log("SIGTERM received shutting down gracefully");
  server.close(async()=>{
    await disconnectDb();
    process.exit(0);

  });
})
