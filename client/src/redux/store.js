import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductsReducer } from "./reducers/productsReducer";
/* createStore two arguments
1. reducer (means action items can be multiple or single (kya kyaa chate ho vo mention kr skte hai))
   --if using multiple reducer then use combineReducers
2. middleware -- connect to redux dev tool in chrome
     composeWithDevTools(middleware) pass kra
*/

const reducer = combineReducers({
  getProducts: getProductsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
