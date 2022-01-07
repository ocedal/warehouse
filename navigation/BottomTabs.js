import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyStack from "./itemsNavigation";
import orderStack from "./ordersNavigation";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../store/slices/orderSlice";
import { fetchItems } from "../store/slices/itemSlice";

const Tab = createMaterialBottomTabNavigator();
function Tabs(props) {
  const dispatch = useDispatch();
  dispatch(fetchOrders());
  dispatch(fetchItems());

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Orders'
        activeColor={Colors.secondary}
        barStyle={{ backgroundColor: Colors.primary }}>
        {/* barStyle={{ backgroundColor: "green" }}> */}
        <Tab.Screen
          name='Orders'
          component={orderStack}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='clipboard-file-outline'
                color={color}
                // color='green'
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Items'
          component={MyStack}
          options={{
            tabBarLabel: "Stock",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='cube-outline'
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={function ret() {
            return <Text>AAA</Text>;
          }}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='bell-outline'
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;
