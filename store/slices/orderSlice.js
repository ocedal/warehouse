import { createSlice } from '@reduxjs/toolkit'
import ordersArr from '../../data/orderDummy'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    allOrders: ordersArr,
  },
  reducers: {
    non: (state) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { non } = orderSlice.actions

export default orderSlice.reducer
