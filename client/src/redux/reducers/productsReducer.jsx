/* 
if we treat  getProductsReducer as reducer then thier is two argument 
 1. state  -- current aati hai
2.action -- value updated aati hai after dispatch
*/

import * as actionType from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionType.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
