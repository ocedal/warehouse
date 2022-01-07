import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { fullfillThunk, fetchItems } from "../store/slices/itemSlice";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
export default function Scanner(props) {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // console.log("scanner params", props.route.params);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    // console.log("inside handler", props.route.params.SKU == data);
    if (props.route.params.SKU == data) {
      dispatch(
        fullfillThunk({
          SKU: props.route.params.SKU,
          orderNo: props.route.params.orderNo,
        })
      );
      // console.log("00000000");
      // dispatch(fetchItems());
    }
    alert(`Item with SKU: ${data} has been scanned`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          color={Colors.primary}
          title={"Tap to Scan Again"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
