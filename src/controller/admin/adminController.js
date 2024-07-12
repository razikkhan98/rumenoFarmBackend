import adminProduct from "../../model/admin/adminProduct.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await adminProduct.create(req.body);
    if (!product) return res.status(404).send("Product not created!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
