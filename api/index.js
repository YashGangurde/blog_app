/** @format */

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.listen("5000", () => {
  console.log("Backend is running.");
});
