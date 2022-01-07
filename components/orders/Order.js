import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
const Order = (props) => {
  // console.log('---------->', props)
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  // return (
  //   <View>
  //     <TouchableCmp onPress={props.orderDetails} useForeGround>
  //       <View style={styles.item}>
  //         <View style={styles.details}>
  //           <Text style={styles.text}>Order Number: {props.orderNo}</Text>
  //           <Text style={styles.text}>Client: {props.client}</Text>
  //           <Text style={styles.text}>Status: {props.status}</Text>
  //         </View>
  //         <View style={styles.buttonContainer}>
  //           <Button
  //             color={Colors.primary}
  //             title='View Details'
  //             onPress={props.orderDetails}
  //           />
  //           {/* <Button
  //             color={Colors.primary}
  //             title='add to order'
  //             onPress={props.onAddToOrder}
  //           /> */}
  //         </View>
  //       </View>
  //     </TouchableCmp>
  //   </View>
  // );
  return (
    <View>
      <TouchableCmp onPress={props.orderDetails} useForeGround>
        <View style={styles.item}>
          <View style={styles.details}>
            <Text style={styles.text}>Order Number: {props.orderNo}</Text>
            <Text style={styles.text}>Client: {props.client}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {/* <View style={styles.text}> */}
            <Text style={styles.text}>Status: {props.status}</Text>
            {/* </View> */}
            <Button
              color={Colors.primary}
              title='View Details'
              onPress={props.orderDetails}
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
  );
};
const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    fontSize: 20,
    textAlign: "center",
  },
  item: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 100,
    margin: 10,
    flexDirection: "row",
    // fontSize: 28,
  },

  details: {
    // alignItems: "center",
    // height: "1%",
    // backgroundColor: "red",
    width: "45%",
    // padding: 10,
    margin: 10,
    // fontSize: 28,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  buttonContainer: {
    // fontSize: 135,
    // marginLeft: 60,
    alignItems: "center",
    margin: 10,
    width: "45%",
    // backgroundColor: "green",
  },
});
export default Order;
