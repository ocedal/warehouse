import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/warehouse/ProductItem'

const ItemsOverview = (props) => {
  const items = useSelector((state) => state.items.allItems)
  // const statess = useSelector((state) => state)
  // console.log('------->', statess.orders.allOrders)
  // console.log(typeof items[0].title)
  // console.log(props.navigation.setOptions)

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.SKU}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          quantity={itemData.item.quantity}
          onViewDetail={() => {
            // props.navigation.setOptions({ title: itemData.item.title })

            props.navigation.navigate('Details', {
              SKU: itemData.item.SKU,
              // title: itemData.item.title,
            })
          }}
          AddToStock={() => {}}
        />
        // <Text>{itemData.item.title}</Text>
      )}
    />
    // <Text>{items}</Text>
  )
}

export default ItemsOverview
