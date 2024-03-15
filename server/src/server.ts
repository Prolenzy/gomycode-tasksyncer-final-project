// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const connectDB = require("./utils/db"); // Import the connectDB function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Your routes and middleware here

// Connect to MongoDB
app.listen(process.env.PORT || 5000, () => {
  console.log(`app is running on ${process.env.PORT}`)
})
