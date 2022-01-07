import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  orderById,
  getItemsDB,
  isAvailable,
  fullfillItem,
  fullfillOrder,
} from "../../database/firebase";

const fetchItems = createAsyncThunk(
  "items/fetchALL",
  async (data, thunkAPI) => {
    const response = await getItemsDB();
    // console.log("responseItems", response.length);
    return response;
  }
);
const fullfillThunk = createAsyncThunk(
  "items/fullfill",
  async (data, thunkAPI) => {
    const responseSKU = await isAvailable(data.SKU);
    if (responseSKU) {
      const existance = (Number(responseSKU) - 1).toString();
      await fullfillItem(data.SKU, existance);
      const resFullfillOrder = await orderById(data);
      const newArray = [];
      for (let i = 0; i < resFullfillOrder.itemsSKU.length; i++) {
        let item = {
          SKU: resFullfillOrder.itemsSKU[i].SKU,
          quantity: resFullfillOrder.itemsSKU[i].quantity,
        };
        if (resFullfillOrder.itemsSKU[i].SKU === data.SKU) {
          const newQuantity = (
            Number(resFullfillOrder.itemsSKU[i].quantity) - 1
          ).toString();
          item.quantity = newQuantity;
        }
        newArray.push(item);
      }
      await fullfillOrder(data.orderNo, newArray);
    }
    const response = await getItemsDB();
    return response;
  }
);
export const itemSlice = createSlice({
  name: "item",
  initialState: {
    allItems: [],
  },
  reducers: {
    non: (state) => {
      state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.allItems = action.payload;
    });
    builder.addCase(fullfillThunk.fulfilled, (state, action) => {
      state.allItems = action.payload;
    });
  },
});
export const { non } = itemSlice.actions;
export { fetchItems, fullfillThunk };
export default itemSlice.reducer;
