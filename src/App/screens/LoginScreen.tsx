/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import Auth from "../components/Auth";

export default function LoginScreen() {
  return (
    <View style={{flex: 1, backgroundColor: "#f5f2eb"}}>
      <View style={{flex: 1, justifyContent: "center", paddingHorizontal:60}}><Auth/></View>
    </View>
  );
}
