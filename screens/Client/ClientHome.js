import { StyleSheet, Text, View,TouchableOpacity, } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ClientHome() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#9400D3",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Login")}
          underlayColor="FF149"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            State Manager
          </Text>
        </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#FF1493",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Login")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Supplier
          </Text>
        </TouchableOpacity>
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({});
