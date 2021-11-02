import React, { useEffect } from 'react'
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors'
const ItemDetails = (props) => {
  const SKU = props.route.params.SKU
  // console.log(SKU)
  const selectedItem = useSelector((state) =>
    state.items.allItems.find((elem) => elem.SKU === SKU)
  )
  useEffect(() => {
    props.navigation.setOptions({ title: selectedItem.title })
  })

  // console.log(selectedItem.imageUrl)
  return (
    <ScrollView>
      {/* <View> */}
      <Image style={styles.image} source={{ uri: selectedItem.imageUrl }} />
      {/* </View> */}
      {/* <Button title='Fullfill' onPress={() => {}} /> */}

      <Text style={styles.text}>SKU: {selectedItem.SKU}</Text>
      <Text style={styles.text}>Quantity:{selectedItem.quantity}</Text>
      <Text style={styles.text}>Weight:{selectedItem.weight}</Text>
      <Text style={styles.text}>Dimensions:{selectedItem.dimensions}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title='Get Location'
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  text: {
    marginVertical: 5,

    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    // fontSize: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
})

export default ItemDetails
