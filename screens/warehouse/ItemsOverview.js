import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/warehouse/ProductItem";
import { getItemsDB } from "../../database/firebase";
import { fetchItems, fetch } from "../../store/slices/itemSlice";
import { fetchOrders } from "../../store/slices/orderSlice";
import { useGetItemsQuery } from "../../store/APISlices/items";

const ItemsOverview = (props) => {
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetItemsQuery();
  // console.log(data, error, isLoading);
  // try {
  // const useQueryResult = getItemsApi.endpoints.getPost.useQuery();
  // } catch (e) {}

  // console.log("-------->", useQueryResult);
  // dispatch(fetchItems());
  // dispatch(fetchOrders());
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
