import { createSlice } from '@reduxjs/toolkit'
import ITEMS from '../../data/dummy'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    allItems: ITEMS,
  },
  reducers: {
    non: (state) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { non } = itemSlice.actions

export default itemSlice.reducer
