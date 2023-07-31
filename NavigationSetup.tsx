/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";


export default function NavigationSetup() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
  );
}

