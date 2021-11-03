import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/warehouse/ProductItem'

const ItemsOverview = (props) => {
  const items = useSelector((state) => state.items.allItems)
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
            props.navigation.navigate('Details', {
              SKU: itemData.item.SKU,
            })
          }}
          AddToStock={() => {}}
        />
      )}
    />
  )
}

export default ItemsOverview
