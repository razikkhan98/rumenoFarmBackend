import Product_feedback from "../../model/user/productFeedbackModel.js"

export const createProductFeedback = async (req, res) => {
  console.log('req: ', req.body);
  try {
    const user = await Product_feedback.create(req.body);
    res.status(201).send("Feedback submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
