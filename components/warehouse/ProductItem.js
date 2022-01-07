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
const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View>
      <TouchableCmp
        onPress={props.orderNo ? props.location : props.onViewDetail}
        useForeGround>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.details}>
            <Text>Item: {props.title}</Text>
            <Text>Availability: {props.quantity} pcs.</Text>
            <View style={styles.last}>
              <View style={styles.but}>
                <Button
                  color={Colors.primary}
                  title={props.orderNo ? "Fullfill" : "Details"}
                  onPress={props.orderNo ? props.fullfill : props.onViewDetail}
                  // disabled={props.orderNo ? false : true}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 100,
    margin: 20,
  },
  imageContainer: {
    width: 70,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    padding: 10,
  },
  // actions: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   height: "25%",
  //   paddingHorizontal: 20,
  // },
  last: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "10%",
    paddingLeft: "20%",
  },
});
export default ProductItem;
