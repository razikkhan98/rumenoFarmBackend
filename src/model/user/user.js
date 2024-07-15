import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  role: { type: String, default: "" },
  // role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

export const UserModel = mongoose.model("User", UserSchema);
