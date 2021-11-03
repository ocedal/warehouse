import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../warehouse/ProductItem'
const OrderItem = (props) => {
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
      location={() => {}}
    />
  )
}
export default OrderItem
