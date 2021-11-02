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
const Order = (props) => {
  //   console.log('props', props)
  let TouchableCmp = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View>
      <TouchableCmp onPress={props.onViewDetail} useForeGround>
        <View style={styles.item}>
          <View style={styles.details}>
            <Text style={styles.text}>Order Number: {props.orderNo}</Text>
            <Text style={styles.text}>Client: {props.client}</Text>
            <Text style={styles.text}>Status: {props.status}</Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={Colors.primary}
              title='View Details'
              onPress={props.onViewDetail}
            />
            {/* <Button
              color={Colors.primary}
              title='add to order'
              onPress={props.onAddToOrder}
            /> */}
          </View>
        </View>
      </TouchableCmp>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    marginVertical: 5,

    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 200,
    margin: 10,
    // fontSize: 28,
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
    // padding: 10,
    margin: 10,
    // fontSize: 28,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  actions: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    margin: 70,
    alignItems: 'center',
    height: '50%',
    // width: '100%',
    // paddingHorizontal: 20,
  },
})
export default Order
