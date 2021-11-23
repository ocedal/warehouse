import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItemsDB } from "../../database/firebase";
import ITEMS from "../../data/dummy";

const fetchItems = createAsyncThunk(
  "items/fetchALL",
  async (data, thunkAPI) => {
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
  },
});
export const { non } = itemSlice.actions;
export { fetchItems };
export default itemSlice.reducer;
