// Import the functions you need from the SDKs you need
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// const asd = 0;
// zcx
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAQqFEwVQJRqlg6sbVKbKH0bV56p-wxmGU",
  authDomain: "warehouse-firebase-815ad.firebaseapp.com",
  projectId: "warehouse-firebase-815ad",
  storageBucket: "warehouse-firebase-815ad.appspot.com",
  messagingSenderId: "591665205122",
  appId: "1:591665205122:web:cd86c4dcdfaceb3f52499b",
};
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore();
// await import("intl");
// console.log(collection);
const getItemsDB = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const itemsArr = [];
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
    return itemsArr;
  } catch (e) {
    // console.log("error");
  }
};
const getOrdersDB = async () => {
  try {
    console.log("db request");
    const querySnapshot = await getDocs(collection(db, "orders"));
    const ordersArr = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().client}`);
      const order = {
        client: doc.data().client,
        orderNo: doc.data().orderNo,
        itemsSKU: doc.data().itemsSKU,
        status: doc.data().status,
        // title: doc.data().title,
        // SKU: doc.data().SKU,
        // imageUrl: doc.data().imageUrl,
        // location: doc.data().location,
        // weight: doc.data().weight,
        // dimensions: doc.data().dimensions,
        // quantity: doc.data().quantity,
      };
      // console.log(item);
      ordersArr.push(order);
    });
    // console.log(itemsArr);
    return ordersArr;
  } catch (e) {
    console.log("error in orders");
  }
};
// getOrdersDB();
// alt();
export { getItemsDB, getOrdersDB };
// const itemsCol = collection(db,'items')
// const snapshot = await getDocs(itemsCol)
// console.log(itemsCol)

// app();
// console.log(app);

// console.log(db)
// export { db };
