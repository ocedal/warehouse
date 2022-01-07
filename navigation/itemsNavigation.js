import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import ItemsOverview from "../screens/warehouse/ItemsOverview";
import ItemDetails from "../screens/warehouse/ItemDetails";
import Colors from "../constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            // height: 0,
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}>
        <Stack.Screen
          name='Home'
          component={ItemsOverview}
          options={{
            title: "Stock",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name='Details'
          component={ItemDetails}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
