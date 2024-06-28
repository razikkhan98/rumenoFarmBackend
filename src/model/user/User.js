import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true,unique: true, },
  password: { type: String, required: true },
  mobile: { type: Number, },
  // address:{type: String, required: true}
});

export const UserModel = mongoose.model("User", UserSchema);
