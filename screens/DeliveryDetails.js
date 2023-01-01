import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ToastAndroid,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { db } from "../firebase-config/firebase-config";
  import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  
  export default function DeliveryDetails() {
    const [getData, setGetData] = useState("");
    const navigation = useNavigation();
    const DatCollectinRef = collection(db, "delivery"); //firebase databse reference
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0); //the method for refresh functions
  
    useEffect(() => {
      //fetch the all data from firebase and set it to usestate, this firebase method
      const getAllData = async () => {
        const data = await getDocs(DatCollectinRef);
        setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        forceUpdate();
      };
      getAllData();
    }, [ignored]);
  
    //delete users from datasase
    const deleteOrder = async (id) => {
      try {
        const OrderDoc = doc(db, "delivery", id);
        await deleteDoc(OrderDoc);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      ToastAndroid.show("successfully Deleted!", ToastAndroid.SHORT);
      forceUpdate();
    };
  
    return (
      <View>
        <Text
          style={{
            color: "#0D0140",
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Delivery Details
        </Text>
        {/* store feched data in list using react native flatlist */}
        <FlatList
          style={{
            margin: 5,
            height: "95%",
          }}
          data={getData}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 5,
                backgroundColor: "#00FFFF",
                padding: 10,
                borderRadius: 15,
                elevation: 10,
              }}
            >
              <Text style={styles.text}>Delivery ID : {item.deliveryId}</Text>
              <Text style={styles.text}>Order ID : {item.orderid}</Text>
              <Text style={styles.text}>Delivery Person : {item.deliveryperson}</Text>
              <Text style={styles.text}>Phone Number : {item.phonenumber}</Text>
              <Text style={styles.text}>Amount : {item.amount}</Text>
              <Text style={styles.text}>Delivery Status : {item.deliverystatus}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {/* update button */}
               
               
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: "#0D0140",
      marginVertical: 5,
      fontSize: 15,
    },
    button: {
      marginTop: 15,
      backgroundColor: "#448AFF",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
    },
  });
  