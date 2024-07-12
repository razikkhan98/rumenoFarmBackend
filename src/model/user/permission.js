import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
    type: String,
  },
});

const Permission = mongoose.model("Permission", schema);

export { Permission };
