import axios from "axios";
import * as actionType from "../constants/productConstant";
const URL = "http://localhost:8000";
//  after async ye ek middleware ki API hai jo ki dispatch kam aati hai
/* 
getProducts( ) function ko call krnge Home.jsx se other wise reducer m epmty state rahegi
*/

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);

    // dispatch functioninternally reducer ko call krta hai like useR
    // hum direct useReducer ko call nai krte dispatch o krte hai

    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
    //  disptach call hote he reducer call hota hai jo ki productsReducer.jsx mai hai
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
