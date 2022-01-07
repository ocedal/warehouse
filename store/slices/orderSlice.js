import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrdersDB, getItemsDB } from "../../database/firebase";
// import ordersArr from '../../data/orderDummy'

const fetchOrders = createAsyncThunk(
  "orders/fetchALL",
  async (data, thunkAPI) => {
    // console.log("inside fetchOrders", getOrdersDB);
    const response = await getOrdersDB();
    // console.log("responseOrders-length", response.length);
    return response;
  }
);
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    allOrders: [],
  },
  reducers: {
    getAllOrders: (state, action) => {
      // state = action.payload;
    },
  },
  extraReducers: (builder) => {
    // console.log("inside");
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      // console.log("aaa");
      state.allOrders = action.payload;
    });
  },
});
export const { getAllOrders } = orderSlice.actions;
export { fetchOrders };
export default orderSlice.reducer;
