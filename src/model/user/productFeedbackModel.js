import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    product_id: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },

    user_id: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product_feedback", UserSchema);
