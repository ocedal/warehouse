import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getItemsApi } from "./APISlices/items";
import itemReducer from "./slices/itemSlice";
import orderReducer from "./slices/orderSlice";
// console.log(itemReducer, orderReducer);
export default configureStore({
  reducer: {
    items: itemReducer,
    orders: orderReducer,
    // [getItemsApi.reducerPath]: getItemsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(getItemsApi.middleware),
});
