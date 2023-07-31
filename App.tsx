/* eslint-disable prettier/prettier */
import React from "react";

import {SafeAreaView, StatusBar, useColorScheme} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import NavigationSetup from "./NavigationSetup";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationSetup />
    </SafeAreaView>
  );
}

export default App;
