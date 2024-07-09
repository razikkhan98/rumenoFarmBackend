import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: Number,unique: true},
  address:{type: String, required: true},
  city:{type: String, required: true},
  state:{type: String, required: true},
  country:{type: String, required: true},
});

export const UserModel = mongoose.model("User", UserSchema);
