import { UserModel } from "../../model/user/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import FarmerDetail from '../../model/farmData/FarmerDetailModel.js'
import { getFarmerDetail } from "../../controller/farmData/FarmerDetailController.js";
import { getAddToCart } from "../../controller/user/addToCartController.js";


export const loginUser = async (data) => {
  try {
    // check if the user exists
    const user = await UserModel.findOne({ email: data?.email });
    if (user) {
      //check if password matches

      // compare hashed password with plain text password

      const result = await bcrypt.compare(data?.password, user?.password);
      if (result) {
        // generate a token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const getFarmerDetailData = await getFarmerDetail(user._id)
        const getAddToCartData = await getAddToCart(user._id)
      

        getAddToCart

        return {
          status: 200,
          message: "Login Successfully",
          token: token,
          uID: user?._id,
          userName: user?.fullName,
          // ----------NEW ADD
          date: '7/7/2027',
          FarmName:getFarmerDetailData,
          pID:getAddToCartData,
          rId: "rId",
          sessionId: "sessionId"
        };
      } else {
        return { status: 400, message: "password doesn't match" };
      }
    } else {
      return { status: 400, message: "User doesn't exist" };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};
