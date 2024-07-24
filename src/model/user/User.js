import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = mongoose.Schema({
  firstName:{ type: String, required: true },
  lastName:{ type: String},
  email:{ type: String, required: true, unique: true },
  password:{ type: String, required: true },
  mobile:{ type: String,unique: true},
  address:{type: String, required: true},
  city:{type: String,},
  state:{type: String,},
  country:{type: String,},
  otp:{type: String, default:""}
});

export const UserModel = mongoose.model("User", UserSchema);
