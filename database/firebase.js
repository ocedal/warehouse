// Import the functions you need from the SDKs you need
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQqFEwVQJRqlg6sbVKbKH0bV56p-wxmGU",
  authDomain: "warehouse-firebase-815ad.firebaseapp.com",
  projectId: "warehouse-firebase-815ad",
  storageBucket: "warehouse-firebase-815ad.appspot.com",
  messagingSenderId: "591665205122",
  appId: "1:591665205122:web:cd86c4dcdfaceb3f52499b",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const fullfillOrder = async (data, newArrray) => {
  try {
    console.log("fullfill Order DB");
    const itemRef = doc(db, "orders", data);
    // console.log(newArray);
    await updateDoc(itemRef, {
      itemsSKU: newArrray,
    });
    return "finish";
  } catch (e) {
    ("error getting item by SKU");
  }
};
const orderById = async (data) => {
  try {
    console.log("getting order", data.orderNo);
    const itemRef = doc(db, "orders", data.orderNo);
    const orderObj = await getDoc(itemRef);
    // console.log(orderObj.data());
    return orderObj.data();
  } catch (e) {
    ("error getting item by SKU");
  }
};
const fullfillItem = async (data, existance) => {
  try {
    console.log("fullfill DB request");
    const itemRef = doc(db, "items", data);
    await updateDoc(itemRef, {
      quantity: existance,
    });
    return "aaaaaaaaa";
  } catch (e) {
    ("error getting item by SKU");
  }
};
const isAvailable = async (data) => {
  try {
    console.log("inside DB request");
    let available = false;
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      if (doc.data().SKU === data && doc.data().quantity > 0) {
        available = doc.data().quantity;
      }
    });
    return available;
  } catch (e) {
    ("error getting item by SKU");
  }
};
const getItemsDB = async () => {
  try {
    console.log("fetching items");
    const itemsArr = [];
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().title}`);
      const item = {
        title: doc.data().title,
        SKU: doc.data().SKU,
        imageUrl: doc.data().imageUrl,
        location: doc.data().location,
        weight: doc.data().weight,
        dimensions: doc.data().dimensions,
        quantity: doc.data().quantity,
      };
      // console.log(item);
      itemsArr.push(item);
    });
    // console.log(itemsArr);
    // return true;
    return itemsArr;
  } catch (e) {
    console.log("error in items");
  }
};
const getOrdersDB = async () => {
  try {
    console.log("fetching orders");
    const querySnapshot = await getDocs(collection(db, "orders"));
    let ordersArray = [];
    querySnapshot.forEach((doc) => {
      // console.logr(`${doc.id} => ${doc.data().client}`);
      const order = {
        client: doc.data().client,
        orderNo: doc.data().orderNo,
        itemsSKU: doc.data().itemsSKU,
        status: doc.data().status,
      };
      // console.log(order);
      ordersArray.push(order);
    });
    // console.log(ordersArray);
    return ordersArray;
    // return [];
  } catch (e) {
    console.log("error in orders");
  }
};
export {
  getItemsDB,
  getOrdersDB,
  isAvailable,
  fullfillItem,
  fullfillOrder,
  orderById,
};
