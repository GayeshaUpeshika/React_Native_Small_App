import { View, Platform, StatusBar } from "react-native";
import LoginHome from "./screens/Login/LoginHome";
import Login from "./screens/Login/Login";
import SignUpPage from "./screens/Login/SignUpPage";
import SignUp from "./screens/Login/SignUp";
import ClientHome from "./screens/Client/ClientHome";
import AddUser from "./screens/AddUser";
import UserList from "./screens/UserList";
import UpdateUser from "./screens/UpdateUser";
import AddOrder from "./screens/AddOrder";
import OrderList from "./screens/OrderList";
import OrderSummary from "./screens/OrderSummary";
import UpdateOrder from "./screens/UpdateOrder";
import UpdateOrderSummary from "./screens/UpdateOrderSummary";
import DeliveryDetails from "./screens/DeliveryDetails";
import Payment from "./screens/Payment";
import StateManagerHome from "./screens/Client/StateManagerHome";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";







const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Client" component={ClientHome} />
          <Stack.Screen name="Login" component={LoginHome} />
          <Stack.Screen name="Log in" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUpPage} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Add User" component={AddUser} />
          <Stack.Screen name="User List" component={UserList} />
          <Stack.Screen name="Update User" component={UpdateUser} />
          <Stack.Screen name="Add" component={AddOrder} />
          <Stack.Screen name="OrderList" component={OrderList} />
          <Stack.Screen name="OrderSummary" component={OrderSummary} />
          <Stack.Screen name="UpdateOrder" component={UpdateOrder} />
          <Stack.Screen name="UpdateOrderSummary" component={UpdateOrderSummary} />
          <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="StateManagerHome" component={StateManagerHome} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
