import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { db } from "../firebase-config/firebase-config";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";

export default function Order() {
  const [data, setData] = useState("");
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "orders"); //database collection reference

  //inputs handle function
  const handleChangeText = (orderid, value) => {
    setData((prevState) => ({ ...prevState, [orderid]: value }));
  };

  //create user function,include firebase methods
  const add_data = async () => {
    try {
      await addDoc(DatCollectinRef, {
        orderid: data.orderid,
        item: data.item,
        quantity: data.quantity,
        deadline: data.deadline,
      });
      if (addDoc) {
        ToastAndroid.show("successfully submited!", ToastAndroid.SHORT); //application toast message
      }
    } catch (e) {
      //error handling
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
          fontSize: 30,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Add Orders
      </Text>

      {/* user data entering form start form here */}
      <View
        style={{
          margin: 5,
          borderBottomWidth: 1,
          borderColor: "#BDBDBD",
          padding: 10,
        }}
      >
        {/* lables */}
        <Text style={styles.text}>OrderId</Text>
        {/* input fields  */}
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
          onChangeText={(val) => handleChangeText("orderid", val)}
        ></TextInput>
        {/* lables */}
        <Text style={styles.text}>Item</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="enter item"
          onChangeText={(val) => handleChangeText("item", val)}
        ></TextInput>


       <Text style={styles.text}>Quantity</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="enter quantity"
          onChangeText={(val) => handleChangeText("quantity", val)}
        ></TextInput>

       <Text style={styles.text}>Deadline</Text>
        {/* input fields  */}
        <TextInput
          style={{
            borderColor: "#67afff",
            borderWidth: 1.5,
            borderRadius: 10,
            padding: 5,
            paddingLeft: 10,
          }}
          placeholder="enter deadline"
          onChangeText={(val) => handleChangeText("deadline", val)}
        ></TextInput>



        {/* submit button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={2}
          onPress={() => add_data()}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("OrderList")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            OrderList 🛒
          </Text>
        </TouchableOpacity>
      <View>
      <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            
          }}
          onPress={() => navigation.navigate("OrderSummary")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Approved/Pending/Cancel Orders🛒
          </Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
            
          }}
          onPress={() => navigation.navigate("DeliveryDetails")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Delivery Details🛒
          </Text>
        </TouchableOpacity>
      </View>
      
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
