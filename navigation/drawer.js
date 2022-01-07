import * as React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  Text,
} from "@react-navigation/drawer";
import MyStack from "./itemsNavigation";
import OrderStack from "./ordersNavigation";
// import Tabs from "./BottomTabs";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../store/slices/orderSlice";
import { fetchItems } from "../store/slices/itemSlice";
// import Header from "../components/header";

function CustomDrawerContent(props) {
  // console.log(Header);
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
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dispatch = useDispatch();
  dispatch(fetchOrders());
  dispatch(fetchItems());

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // title: "drawer",
          // drawerContentContainerStyle: { color: "#2dcdc6" },
          // headerStyle: { color: "#2dcdc6" },
          headerStyle: { height: 100 },
          // headerShown: true,
          // header: Header,
          drawerActiveTintColor: "#2dcdc6",
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        {/* <Drawer.Screen name='Warehouse' component={MyStack} /> */}
        <Drawer.Screen name='Orders' component={OrderStack} />
        <Drawer.Screen name='Warehouse' component={MyStack} />
        {/* <Drawer.Screen name='Notifications' component={Notifications} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MyDrawer;
