/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./src/App/screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  );
}

