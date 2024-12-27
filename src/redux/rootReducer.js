import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    // user: userReducer,
    // products: productsReducer,
    // orders: ordersReducer
});

export default rootReducer;