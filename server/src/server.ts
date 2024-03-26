import express, {Request, Response } from 'express';
const cors = require("cors");
const dotenv = require("dotenv");
const {connectDB} = require("./utils/db"); // Import the connectDB function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Your routes and middleware here
app.get('/', (req: Request, res: Response) => {
  res.send('Hey guys, niko hapa');
})
// Connect to MongoDB
app.listen(process.env.PORT || 5000, () => {
  connectDB()
  console.log(`app is running on ${process.env.PORT}`)
})
