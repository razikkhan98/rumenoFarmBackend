import AddToCart from "../../model/user/addToCartModel.js";

export const createAddToCart = async (req, res) => {
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

export const getAddToCart = async (data) => {
  try {
    const user = await AddToCart.find({uid:data});
    return user;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteAddToCart = async (req, res) => {
    try {
    let data =  await AddToCart.deleteOne({id:Number(req.params.id)});
    res.status(200).send("success");
    } catch (error) {
      console.log("error: ", error);
      res.status(400).send(error.message);
    }
}
export const deleteAfterTransaction = async (data) => {
  try {
  let dataRemove =  await AddToCart.deleteMany({uid:data});
  console.log('dataRemove: ', dataRemove);
  console.log("Previous Product Remove Success");
  } catch (error) {
    console.log("error: ", error);
    res.status(400).send(error.message);
  }
}