import { StyleSheet, View, Text } from "react-native";

export default function Display({ result }) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#202020",
    padding: 50,
  },
  displayText: {
    color: "#fff",
    fontSize: 60,
  },
});
