import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import productSlice from "../redux/Products";

export default configureStore({
  reducer: productSlice,
});
