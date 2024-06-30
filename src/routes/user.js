import express from "express";
import { UserRegistration } from "../controller/user/user.js";
import { fileParser } from "../controller/transactionController.js";
import transactionModel from "../model/transactionModel.js";
import { createProductFeedback } from "../controller/user/productFeedbackController.js";
import { createServiceForm } from "../controller/user/serviceFormController.js";
import { createContactUs } from "../controller/user/contactController.js";
import { createBlog } from "../controller/user/blogController.js";
import { createTransactionIssue } from "../controller/user/transactionIssueController.js";
import { createAddToCart } from "../controller/user/addToCartController.js";
import { UserLogin } from "../controller/user/loginController.js";

const UserRouter = express.Router();

// User Registration

UserRouter.post("/user/register", UserRegistration);

// User Login

UserRouter.post("/user/login", UserLogin);


// Transaction Route
UserRouter.post("/post", fileParser, async (req, res) => {
  try {
    console.log("req111111111111111: ", req);
    const postData = req.body;
    console.log("postData: ", postData);
    postData.image = req.files[0] || null; // Save image path if uploaded
    const post = new transactionModel({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      address: req.body.address,
      amount: req.body.amount,
      transactionID: req.body.transactionID,
      paymode: req.body.paymode,
      cod_payment: req.body.cod_payment,
      image: {
        data: req.files[0].originalname,
        contentType: req.files[0].mimetype,
      },
    });
    await post.save();
    const ImageDisplay = ( postData ) => {
        // Convert buffer to Base64
        const bufferToBase64 = (buffer) => {
            let binary = '';
          let bytes = new Uint8Array(buffer);
          for (let i = 0; i < bytes.byteLength; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
          return window.btoa(binary);
        };
        ImageDisplay()
        const base64Url = `data:${postData.image.mimetype};base64,${bufferToBase64(postData.image.buffer)}`;}
        console.log('base64Url: ', base64Url);
        res.status(201).send(post);
        res.send(base64Url)

  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(error.message);
  }
});

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







export default UserRouter;
