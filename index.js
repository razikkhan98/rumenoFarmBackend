import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Dbconnection } from "./src/config/main.js";
import UserRouter from './src/routes/user.js'
import cors from "cors";


const app = express();
const PORT = 5000;

Dbconnection();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',UserRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})