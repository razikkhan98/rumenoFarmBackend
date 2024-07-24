import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getFarmerDetail } from "../../controller/farmData/farmerDetailController.js";
import { getAddToCart } from "../../controller/user/addToCartController.js";
import { UserModel } from "../../model/user/user.js";


export const loginUser = async (data) => {
  try {
    // check if the user exists
    const user = await UserModel.findOne({ mobile: data?.mobile });
    if (user) {
      //check if password matches

      // compare hashed password with plain text password

      const result = await bcrypt.compare(data?.password, user?.password);
      if (result) {
        // generate a token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "3 day",
        });
        const getFarmerDetailData = await getFarmerDetail(user._id)
        const getAddToCartData = await getAddToCart(user._id)

        return {
          status: 200,
          message: "Login Successfully",
          token: token,
          uID: user?._id,
          userName: user?.firstName,
          // ----------NEW ADD
          date: '7/7/2027',
          FarmName:getFarmerDetailData,
          pID:getAddToCartData,
          rId: "rId",
          sessionId: "sessionId"
        };
      } else {
        return { status: 404, message: "password doesn't match" };
      }
    } else {
      return { status: 401, message: "Mobile Number and Password doesn't match!" };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};
