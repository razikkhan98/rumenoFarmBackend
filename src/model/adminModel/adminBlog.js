import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    content: {
      type: String,
    },

    keywords: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminBlog", Schema);
