import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Picker,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { db } from "../firebase-config/firebase-config";
  import { useNavigation } from "@react-navigation/native";
  import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  //import SelectList from "react-native-dropdown-select-list";
 


  
  export default function UpdateOrderSummary({ route }) {
    const { item } = route.params;
    const id = item.id;
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const initialState = {
      orderid: "",
      item: "",
      quantity: "",
      deadline: "",
      status: "",
    };
   
  

    useEffect(() => {
      const updatemember = async () => {
        try {
          const docRef = await getDoc(doc(db, "orders", id));
          // console.log("Document update data:", docRef.data());
          setData({ ...docRef.data(), id: docRef.id });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
  
      updatemember();
    }, []);
  
    const handleChangeText = (name, value) => {
      setData((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const UpdateOrder = async () => {
      try {
        await updateDoc(doc(db, "orders", id), {
          orderid: data.orderid,
          item: data.item,
          quantity: data.quantity,
          deadline: data.deadline,
          status: data.status,
        });
        if (updateDoc) {
          ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
          navigation.navigate("OrderSummary");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      }
    };


    
    
  
    return (
      <View style={{ flex: 1, top: 20 }}>
        <Text
          style={{
            color: "#0D0140",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            textAlign: "center",
          }}
        >
          Update Order Summary Details
        </Text>
        <View
          style={{
            margin: 5,
            borderBottomWidth: 1,
            borderColor: "#BDBDBD",
            padding: 10,
          }}
        >
          <Text style={styles.text}>Order Id</Text>
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            keyboardType="orderid"
            placeholder="enter orderid"
            value={data.orderid}
            onChangeText={(val) => handleChangeText("orderid", val)}
          ></TextInput>
  
          <Text style={styles.text}>Item</Text>
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter item"
            value={data.item}
            onChangeText={(val) => handleChangeText("item", val)}
          ></TextInput>

          <Text style={styles.text}>Quantity</Text>
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter quantity"
            value={data.quantity}
            onChangeText={(val) => handleChangeText("quantity", val)}
          ></TextInput> 


          <Text style={styles.text}>Deadline</Text>
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter deadline"
            value={data.deadline}
            onChangeText={(val) => handleChangeText("deadline", val)}
          ></TextInput>

          
          <Text style={styles.text}>Order Status</Text>
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter status"
            value={data.status}
            onChangeText={(val) => handleChangeText("status", val)}
          ></TextInput>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={2}
            onPress={() => UpdateOrder()}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  
  const styles = StyleSheet.create({
    text: {
      color: "#0D0140",
      marginVertical: 5,
      fontWeight: "bold",
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

