import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import itemsReducer from './store/reducers/items'
import ordersReducer from './store/reducers/order'
import MyStack from './navigation/itemsNavigation'
import ItemsOverview from './screens/warehouse/ItemsOverview'
// console.log(ordersReducer)
// var reduxDevTools = require('@redux-devtools/cli')
// reduxDevTools({ hostname: 'localhost', port: 8000 })
const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 8000,
})
const rootReducer = combineReducers({
  items: itemsReducer,
  orders: ordersReducer,
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))
export default function App() {
  return (
    <Provider store={store}>
      {/* <View>
        <Text>AAAAAA</Text>
      </View> */}
      {/* <ItemsOverview /> */}
      <MyStack />

      {/* <StatusBar /> */}
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
