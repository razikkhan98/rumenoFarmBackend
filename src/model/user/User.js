import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = mongoose.Schema({
  fullName:{ type: String, required: true },
  email:{ type: String, required: true, unique: true },
  password:{ type: String, required: true },
  mobile:{ type: String,unique: true},
  address:{type: String, required: true},
  city:{type: String,},
  state:{type: String,},
  country:{type: String,},
});

export const UserModel = mongoose.model("User", UserSchema);
