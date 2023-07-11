const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    brand: String,
    donor: String,
    weight: String,
    img: String,
    bestbefore: String,
    delivery: String,
  },
  { versionKey: false }
);

const Item = mongoose.model("Item", itemSchema);

const nutritionSchema = new mongoose.Schema(
  {
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    nutrition: String,
    dateUpdated: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Nutrition = mongoose.model("nutrition", nutritionSchema);
module.exports = { Item, Nutrition };
