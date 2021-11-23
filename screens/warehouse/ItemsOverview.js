import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/warehouse/ProductItem";
import { getItemsDB } from "../../database/firebase";
import { fetchItems, fetch } from "../../store/slices/itemSlice";

const ItemsOverview = (props) => {
  const dispatch = useDispatch();
  dispatch(fetchItems());
  // const alt = getItemsDB();
  // console.log("aaa", alt);
  const items = useSelector((state) => state.items.allItems);
  // const state = useSelector((state) => state);
  // console.log("------>", state);
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
            props.navigation.navigate("Details", {
              SKU: itemData.item.SKU,
            });
          }}
          AddToStock={() => {}}
          // fullfill={
          //   props.navigation.navigate('Scanner')
          // }
        />
      )}
    />
  );
};

export default ItemsOverview;
