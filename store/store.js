import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './slices/itemSlice'
import ordersReducer from './slices/orderSlice'

export default configureStore({
  reducer: {
    items: itemReducer,
    orders: ordersReducer,
  },
})
