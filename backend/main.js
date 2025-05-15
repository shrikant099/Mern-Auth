import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

// Middlware 
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Helo from express...");
});

// userRoutes
app.use("/api/v1/user", userRoutes)

//Db connection
await dbConnection()

app.listen(process.env.PORT, () => {
  console.log(`App is listening on Port: http://localhost:${process.env.PORT}`);
});

// user registration routes and controller create .......
