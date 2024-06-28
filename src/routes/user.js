import express from "express";
import { usercontroller } from "../controller/user/User.js";
import { createProductFeedback } from "../controller/user/productFeedbackController.js";
import { createServiceForm } from "../controller/user/serviceFormController.js";
import { createContactUs } from "../controller/user/contactController.js";
import { createBlog } from "../controller/user/blogController.js";
import { createTransactionIssue } from "../controller/user/transactionIssueController.js";
import {createAddToCart,deleteAddToCart,} from "../controller/user/addToCartController.js";
import {upload,uploadImage,getImage} from "../controller/user/transactionController.js";


const UserRouter = express.Router();

// User Registration
const UserController = new usercontroller();
UserRouter.post("/user/register", UserController.UserRegistration);


// Transaction Route



UserRouter.post('/upload', upload.single('image'),uploadImage);

UserRouter.get("/image",getImage)


// Feedback
UserRouter.post("/feedback", createProductFeedback);

// Service Page Route
UserRouter.post("/service_form", createServiceForm);

// Contact Us Route
UserRouter.post("/contact_us", createContactUs);

// Blog Comment Route
UserRouter.post("/blog", createBlog);

// Transaction Issue Route
UserRouter.post("/transaction_issue", createTransactionIssue);

// Add to Cart Route
UserRouter.post("/cart", createAddToCart);
UserRouter.delete("/cart/:id", deleteAddToCart);

export default UserRouter;
