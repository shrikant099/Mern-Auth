import express from "express";
import { login, registerUser } from "../controller/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", login);

export default userRoutes;
