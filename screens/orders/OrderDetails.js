import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/orders/OrderItem'
const OrderDetails = (props) => {
  const orderNo = props.route.params.orderNo
  const selectedOrder = useSelector((state) =>
    state.orders.allOrders.find((elem) => elem.orderNo === orderNo)
  )
  const items = selectedOrder.itemsSKU
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
