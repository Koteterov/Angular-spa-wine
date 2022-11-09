const { model, Schema, Types: { ObjectId } } = require('mongoose');

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  origin: {
    type: String,
    required: [true, "Origin is required"],
  },
  price: {
    type: Number,
    min: [0.01, "Price must be a positive number"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },

  _ownerId: { type: ObjectId, ref: "User" },

  likesList: [{ type: ObjectId, ref: "User" }],

});

const Item = model("Item", itemSchema);

module.exports = Item;

