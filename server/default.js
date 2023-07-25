//  this file is use for load default data on website open
import { products } from "./constants/Data.js";
import ProductList from "./model/product-schema.js";
const DefaultData = async () => {
  try {
    await ProductList.insertMany(products);
    console.log("Data Insert successfully");
  } catch (error) {
    console.log("error while inerting default data ", error.message);
  }
};
export default DefaultData;
