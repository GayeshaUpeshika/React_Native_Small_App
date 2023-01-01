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
  
  export default function Payment() {
    const [data, setData] = useState("");
    const navigation = useNavigation();
    const DatCollectinRef = collection(db, "payment"); //database collection reference
  
    //inputs handle function
    const handleChangeText = (orderid, value) => {
      setData((prevState) => ({ ...prevState, [orderid]: value }));
    };
  
    //create user function,include firebase methods
    const add_data = async () => {
      try {
        await addDoc(DatCollectinRef, {
          chequeno: data.chequeno,
          sender: data.sender,
          receiver: data.receiver,
          amount: data.amount,
          issuedate: data.issuedate,
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
          Make A Payment
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
          <Text style={styles.text}>Cheque No</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            keyboardType="chequeno"
            placeholder="enter chequeno"
            onChangeText={(val) => handleChangeText("chequeno", val)}
          ></TextInput>
          {/* lables */}
          <Text style={styles.text}>Sender</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter sender"
            onChangeText={(val) => handleChangeText("sender", val)}
          ></TextInput>
  
  
         <Text style={styles.text}>Receiver</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter receiver"
            onChangeText={(val) => handleChangeText("receiver", val)}
          ></TextInput>
  
         <Text style={styles.text}>Amount</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter amount"
            onChangeText={(val) => handleChangeText("amount", val)}
          ></TextInput>



         <Text style={styles.text}>Issue Date</Text>
          {/* input fields  */}
          <TextInput
            style={{
              borderColor: "#67afff",
              borderWidth: 1.5,
              borderRadius: 10,
              padding: 5,
              paddingLeft: 10,
            }}
            placeholder="enter issuedate"
            onChangeText={(val) => handleChangeText("issuedate", val)}
          ></TextInput>
  
  
  
          {/* submit button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={2}
            onPress={() => add_data()}
            underlayColor="#0084fffa"
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Pay Now
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
  