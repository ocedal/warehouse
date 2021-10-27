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
import Colors from '../../constants/Colors'
const ProductItem = (props) => {
  // console.log(props)
  let TouchableCmp = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View>
      <TouchableCmp onPress={props.onViewDetail} useForeGround>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.details}>
            <Text>{props.title}</Text>
            <Text>{props.quantity}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title='View Details'
              onPress={props.onViewDetail}
            />
            <Button
              color={Colors.primary}
              title='add to order'
              onPress={props.onAddToOrder}
            />
          </View>
        </View>
      </TouchableCmp>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
})
export default ProductItem
