import express from "express";
const app = express();
import * as dotenv from "dotenv";
import mongoose from "mongoose";
const port = process.env.PORT || 5000;
dotenv.config();

import Topic from "../models/topicModel";

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connect = async () => {
  try {
    await mongoose.connect(process.env.VITE_MONGO);
    console.log("connected to mongdb");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send(process.env.VITE_MONGO);
});

app.listen(port, () => {
  connect();
  console.log(`Server started on port ${port}`);
});
