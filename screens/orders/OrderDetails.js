import React, { useEffect } from 'react'
import {
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors'
import OrderItem from '../../components/warehouse/OrderItem'
const OrderDetails = (props) => {
  const orderNo = props.route.params.orderNo
  //   console.log(orderNo)
  const selectedOrder = useSelector((state) =>
    state.orders.allOrders.find((elem) => elem.orderNo === orderNo)
  )
  const items = selectedOrder.itemsSKU
  //   console.log('aa', items)

  useEffect(() => {
    props.navigation.setOptions({
      title: 'Order No. ' + selectedOrder.orderNo,
    })
  })

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.SKU}
      renderItem={(itemData) => (
        <OrderItem
          SKU={itemData.item.SKU}
          quantity={itemData.item.quantity}
          orderNo={selectedOrder.orderNo}
        />
      )}
    />
  )
}

export default OrderDetails
