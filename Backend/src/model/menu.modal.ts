import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    menuName: {
      type: String,
      required: true,
    },
    menuDescription: {
      type: String,
      required: true,
    },
    items: [
      {
        itemName: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },
        itemDescription: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
