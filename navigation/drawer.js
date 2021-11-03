import * as React from 'react'
import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import MyStack from './itemsNavigation'
import OrderStack from './ordersNavigation'
import Colors from '../constants/Colors'
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      // inactiveBackgroundColor={Colors.primary}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        // inactiveBackgroundColor={Colors.primary}
        // activeTintColor={Colors.primary}
        label='Close'
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      {/* <DrawerItem
        label='Toggle drawer'
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#2dcdc6',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='Orders' component={OrderStack} />
        <Drawer.Screen name='Warehouse' component={MyStack} />
        {/* <Drawer.Screen name='Notifications' component={Notifications} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default MyDrawer
