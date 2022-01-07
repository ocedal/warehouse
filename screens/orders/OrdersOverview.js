import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Order from "../../components/orders/Order";
import { fetchOrders } from "../../store/slices/orderSlice";
import { fetchItems } from "../../store/slices/itemSlice";
// import { getOrdersDB } from "../../database/firebase";

// import {db} from '../../database/firebase'
const OrdersOverview = (props) => {
  // const dispatch = useDispatch();
  // dispatch(fetchOrders());
  // dispatch(fetchItems());
  const orders = useSelector((state) => state.orders.allOrders);
  // const state = useSelector((state) => state);
  // console.log("a", state);
  return (
    <FlatList
      data={orders}
      keyExtractor={(order) => order.orderNo}
      renderItem={(orderData) => (
        <Order
          orderNo={orderData.item.orderNo}
          client={orderData.item.client}
          status={orderData.item.status}
          itemsSKU={orderData.item.itemsSKU}
          // fullfill={() => {
          //   props.navigation.navigate('Screen')
          // }}
          orderDetails={() => {
            props.navigation.navigate("OrderDetails", {
              orderNo: orderData.item.orderNo,
            });
          }}
        />
      )}
    />
  );
};
export default OrdersOverview;
