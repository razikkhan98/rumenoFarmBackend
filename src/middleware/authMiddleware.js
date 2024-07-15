import { UserModel } from "../model/user/user";
import jwt from "jsonwebtoken";

const decodeTokenAndGetUser = async (token) => {
  return await jwt.verify(
    token,
    process.env.JWT_SECRET ||
      "e1569743aa91c36993cd6a679115e601b3e7423515c29bee6eec33ad5aa0138d5"
  );
};

export const authMiddleware = async (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    res.statusCode = 401;
    res.json({ success: false, message: "Please login." });
    return;
  }
  try {
    const data = await decodeTokenAndGetUser(token);
    if (!data) {
      res.json({ success: false, message: "Please login again." }, 401);
      return;
    }
    req.user = await UserModel.findById(data.id);

    next();
  } catch (error) {
    next(error);
  }
};
