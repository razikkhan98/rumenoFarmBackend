import { UserModel } from "../../model/user/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

        return {
          status: 200,
          message: "Login Successful",
          token: token,
          uID: user?._id,
          // name: user?.name,
          // ----------NEW ADD
          name: 'admin',
          date: '7/7/2027',
          // msg:"Success",
          userName:"admin",
          FarmName:"panel",
          pID:"",
          // uID: "7",
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
