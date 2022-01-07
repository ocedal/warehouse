import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import MyDrawer from "./navigation/drawer";
import Tabs from "./navigation/BottomTabs";
import store from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      {/* <MyDrawer /> */}
      <Tabs />
    </Provider>
  );
}
