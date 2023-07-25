import ProductList from "../model/product-schema.js";
export const getProducts = async (request, response) => {
  try {
    // ProductList.find({id: 'product1'})  for particular data
    const products = await ProductList.find({}); //for all product
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
