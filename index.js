import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Dbconnection } from "./src/config/main.js";
import UserRouter from "./src/routes/user.js";
import cors from "cors";
import passport from "passport";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

/**
 * Connects to MongoDB
 */
Dbconnection();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api", UserRouter);
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/**
 * initializes passport authentication
 */
app.use(passport.initialize());

app.listen(process.env.PORT || 8000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}` || "5005"
  );
});
