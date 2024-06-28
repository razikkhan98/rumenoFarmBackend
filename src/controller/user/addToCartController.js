import AddToCart from "../../model/user/addToCartModel.js";

export const createAddToCart = async (req, res) => {
  console.log("req: ", req.body);
  try {
    let item = await AddToCart.findOne({id:req.body.id});
    if (item) {
      item.amount = req.body.amount;
      await item.save();
      res.status(200).send("Cart item updated successfully");
    } else {
      await AddToCart.create(req.body);
      res.status(201).send("Cart item added successfully");
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(400).send(error.message);
  }
};

export const deleteAddToCart = async (req, res) => {
    console.log("req: ", req.params);
    try {
    let cek =  await AddToCart.deleteOne({id:Number(req.params.id)});
    console.log('cek: ', cek);
    res.status(200).send("success");
    } catch (error) {
      console.log("error: ", error);
      res.status(400).send(error.message);
    }
}