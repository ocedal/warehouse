import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FlatList, Text } from 'react-native'

import { Platform } from 'react-native'
import OrdersOverview from '../screens/warehouse/OrdersOverview'
import OrderDetails from '../screens/warehouse/OrderDetails'
import ItemDetails from '../screens/warehouse/ItemDetails'
import Colors from '../constants/Colors'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator()

const orderStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }}
      >
        <Stack.Screen
          name='Orders'
          component={OrdersOverview}
          options={{ title: 'Filter' }}
        />
        <Stack.Screen
          name='OrderDetails'
          component={OrderDetails}
          options={{ title: 'Details' }}
        />
        {/* <Stack.Screen
          name='Details'
          component={ItemDetails}
          options={{ title: 'Details' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default orderStack
