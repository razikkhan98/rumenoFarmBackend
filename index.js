import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Dbconnection } from "./src/config/main.js";
import UserRouter from './src/routes/user.js'
import cors from "cors";


const app = express();

Dbconnection();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',UserRouter);
app.use(express.urlencoded({extended:false}))


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})