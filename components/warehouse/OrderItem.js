import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors'
import ProductItem from './ProductItem'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
const OrderItem = (props) => {
  //   console.log('-->', props.SKU)
  const selectedItem = useSelector((state) =>
    state.items.allItems.find((item) => item.SKU === props.SKU)
  )
  //   const navigationRef = useNavigationContainerRef();
  //   console.log(selectedItem)
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
