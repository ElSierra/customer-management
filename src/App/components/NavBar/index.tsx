import { View, Text } from "react-native";
import { useWindowDimensions } from "react-native-windows";
export default function NavBar() {
  const dimension = useWindowDimensions();
  return (
    <View
      style={{
        height: "100%",
        width: dimension.width / 8,
        maxWidth: 400,
        backgroundColor: "red",
      }}
    >
      <View>
        <Text>Home</Text>
        <Text>Analytics</Text>
        <Text>Explore</Text>
        <Text>Shop</Text>
      </View>
    </View>
  );
}
