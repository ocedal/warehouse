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
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
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
