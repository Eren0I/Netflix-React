import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";


export default configureStore({
    reducer: {
        user: userReducer,
    }
})

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
//     whitelist: ["cart", "auth"],
// };

// const rootReducer = combineReducers({
//     user: userReducer,
//     auth: authReducer,
//     cart: cartReducer,
//     product: productReducer,
//     order: orderReducer,
// });

// import authReducer from "./authSlice";
// import cartReducer from "./cartSlice";
// import productReducer from "./productSlice";
// import orderReducer from "./orderSlice";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";