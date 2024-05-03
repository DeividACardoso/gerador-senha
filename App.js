import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/Home";
import History from "./src/screens/history/History";
import Login from "./src/screens/login/Login";
import Signup from "./src/screens/signup/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Signup" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: "Histórico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}