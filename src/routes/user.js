import express from "express";
import { usercontroller } from "../controller/user/User.js";


const UserRouter = express.Router();

// User Registration

const UserController = new usercontroller
UserRouter.post("/user/register", UserController.UserRegistration)



export default UserRouter;
