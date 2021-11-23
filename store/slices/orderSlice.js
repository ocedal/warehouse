import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrdersDB } from "../../database/firebase";
// import ordersArr from '../../data/orderDummy'

const fetchOrders = createAsyncThunk(
  "orders/fetchALL",
  async (data, thunkAPI) => {
    console.log("inside fetchOrders");
    const response = await getOrdersDB();
    console.log(response);
    return response;
  }
);
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allOrders: [],
  },
  reducers: {
    non: (state) => {
      state;
    },
  },
  extraReducers: (builder) => {
    console.log("inside");
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      console.log("aaa");
      state.allOrders = action.payload;
    });
  },
});
export const { non } = orderSlice.actions;
export { fetchOrders };
export default orderSlice.reducer;
