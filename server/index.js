import express from "express";
import dotenv from "dotenv";
import { Connection } from "./db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.SERVER_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// creating connection
Connection(USERNAME, PASSWORD);

// starting server
app.listen(PORT, () =>
  console.log(`Server running successfully on Port : ${PORT}`)
);
// Inserting default data
DefaultData();
