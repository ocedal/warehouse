import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Order from '../../components/warehouse/Order'
const OrdersOverview = (props) => {
  const orders = useSelector((state) => state.orders.allOrders)
  // console.log('---->', orders)
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
          onViewDetail={() => {
            props.navigation.navigate('OrderDetails', {
              orderNo: orderData.item.orderNo,
            })
          }}
        />
      )}
    />
  )
}
export default OrdersOverview
