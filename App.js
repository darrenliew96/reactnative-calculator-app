import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Custom Components
import Display from "./components/Display";
import PadView from "./components/PadView";
import { handleButtonPress } from "./utils/ButtonLogics";

export default function App() {
  const [result, setResult] = useState("0");

  function onButtonPress(title) {
    const newResult = handleButtonPress(title);
    setResult(newResult);
  }

 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Display result={result} />
      <PadView onButtonPress={onButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
