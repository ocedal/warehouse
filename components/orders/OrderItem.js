import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../warehouse/ProductItem'
const OrderItem = (props) => {
  // console.log('vPI', props)
  const selectedItem = useSelector((state) =>
    state.items.allItems.find((item) => item.SKU === props.SKU)
  )
  return (
    <ProductItem
      image={selectedItem.imageUrl}
      title={selectedItem.title}
      quantity={selectedItem.quantity}
      orderQuantity={props.quantity}
      orderNo={props.orderNo}
      fullfill={props.fullfill}
      // location={() => {}}
      // fullfill={() => {
      //   navigation.navigate('Scanner')
      // }}
    />
  )
}
export default OrderItem
