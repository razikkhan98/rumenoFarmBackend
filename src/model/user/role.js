import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  roleName: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  permissions: [{ type: mongoose.Types.ObjectId, ref: "Permission" }],
});

const Role = mongoose.model("Role", schema);

export { Role };
