/* eslint-disable prettier/prettier */

import { TextInput } from "react-native";
import { View, Text } from "react-native-windows";

export default function Auth() {
  return (
    <View
      style={{
        height: "60%",
        alignItems: "center",
        padding: 40,
        borderRadius: 10,
        backgroundColor: "white",
        width: 400,
      }}
    >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>
        Sign In
      </Text>
      <Text style={{ color: "black", width: "50%", textAlign: "center" }}>
        Hey, Enter your details to login to your account
      </Text>
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor={"#797979"}
        style={{
          borderColor: "black",
          width: "100%",
          marginTop: 10,
          borderRadius: 4,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#797979"}
        secureTextEntry
        style={{
          borderColor: "black",
          width: "100%",
          marginTop: 10,
          borderRadius: 4,
        }}
      />
    </View>
  );
}
