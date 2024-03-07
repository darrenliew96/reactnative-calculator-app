import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Custom Components
import Display from "./components/Display";
import PadView from "./components/PadView";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Display />
      <PadView />
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
