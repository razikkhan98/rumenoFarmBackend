import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  main_heading: {
    type: String,
  },

  short_description: {
    type: String,
  },

  heading1: {
    type: String,
  },

  paragraph1: {
    type: String,
  },

  heading2: {
    type: String,
  },

  paragraph2: {
    type: String,
  },

  heading3: {
    type: String,
  },

  paragraph3: {
    type: String,
  },

  img: {
    type: String,
  },

  date: {
    type: String,
  },

  keywords: { type: Array },
});

export default mongoose.model("AdminBlog", Schema);
