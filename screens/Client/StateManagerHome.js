import { StyleSheet, Text, View,TouchableOpacity, } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function StateManagerHome() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>StateManagerHome</Text>
      <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#9400D3",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Add")}
          underlayColor="FF149"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Add Order
          </Text>
        </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#FF1493",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("OrderList")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            OrderList
          </Text>
        </TouchableOpacity>
        
    </View>

    <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#00FF00",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("OrderSummary")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Approved/Pending/Cancel Orders
          </Text>
        </TouchableOpacity>
        
    </View>
    <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#FF8C00",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("DeliveryDetails")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            DeliveryDetails
          </Text>
        </TouchableOpacity>
        
    </View>

    <View style={{ marginHorizontal: 15 }}>
        {/* Button */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#FF0000",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Client")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Log Out
          </Text>
        </TouchableOpacity>
        
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({});
