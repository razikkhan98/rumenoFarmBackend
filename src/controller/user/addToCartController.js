import AddToCart from "../../model/user/addToCartModel.js"

export const createAddToCart = async (req, res) => {
    console.log('req: ', req.body);
  try {
    if (!req.body.id){
        await AddToCart.create({ id, quantity });
        res.status(201).send("Cart item added successfully");
      }
    else  {
        item.quantity += quantity;
        await item.save();
        res.status(200).send("Cart item updated successfully");
      } 
   await AddToCart.create(req.body);
   await AddToCart.up(req.body);
    res.status(201).send("add to cart successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
