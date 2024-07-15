import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    priceText: {
      type: Number,
    },

    img: {
      type: String,
    },

    metaDesc: {
      type: String,
    },

    Veg: {
      type: String,
    },

    Offer: {
      type: String,
    },

    Delivery: {
      type: String,
    },

    Refundable: {
      type: String,
    },

    Weight: {
      type: String,
    },

    Shortdescription: {
      type: String,
    },

    description: {
      type: String,
    },

    Instruction: {
      type: String,
    },

    Category: {
      type: String,
    },

    Type: {
      type: String,
    },

    imgText: {
      type: String,
    },

    script: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AdminProduct", Schema);
