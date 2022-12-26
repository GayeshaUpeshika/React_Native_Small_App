import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase-config/firebase-config";

export default function LoginHome() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       // console.log("Document data id:", user.uid);

        const getDate = async (id) => {
          const docRef = await getDoc(doc(db, "RegisteredUser", id));

          if (docRef.exists()) {
            const myData = docRef.data();

           // console.log("Document data:", docRef.data().worker_name);
           // const worker_data = docRef.data();
            // console.log("Document data:", myData.role);
            if (myData.role === "site manager") {
              //console.log("ok");
              navigation.navigate("Add");
            }
            if (myData.role === "state manager") {
              //console.log("ok");
              navigation.navigate("Login");
            }
            if (myData.role === "state manager") {
             // console.log("ok");
              navigation.navigate("Login");
            }
            else if (myData.role === "supplier") {
              // console.log("ok");
               navigation.navigate("Log in");
             }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        };
        getDate(user.uid);
      }
    });
    return subscribe;
  });

  const signin = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("StateManagerHome");
        // return { user };
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.main_container}>
      <View>
        <Text>Email</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity
          style={{
            alignContent: "center",
            marginTop: 35,

            justifyContent: "center",

            borderRadius: 7,
          }}
          onPress={() => signin()}
          underlayColor="#0084fffa"
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text>You don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    top: 50,
    margin: 15,
  },
});
