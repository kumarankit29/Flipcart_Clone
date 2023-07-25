// this file is use for validating data which we inserting in database
// jese my sql mai table banate time use krte hai vese yaha model mai schema bante hai

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
// collection name is = product
// (but actual mai jo collection hoga us mai end mai 's' add ho jata so products ho apna collection)
// Schema is = productSchema
// collection => product --> Schema => productSchema
const ProductList = mongoose.model("product", productSchema);

export default ProductList;
