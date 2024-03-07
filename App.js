import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

//Custom Components
import Button from "./components/Button";
import Row from "./components/Row";
import Display from "./components/Display";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Display />
      <Row>
        <Button
          title="C"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
        <Button
          title="%"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
        <Button
          title="←"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
        <Button
          title="/"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
      </Row>
      <Row>
        <Button
          title="7"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="8"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="9"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="X"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
      </Row>
      <Row>
        <Button
          title="4"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="5"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="6"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="-"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
      </Row>
      <Row>
        <Button
          title="1"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="2"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="3"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="+"
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
      </Row>
      <Row>
        <Button
          title="+/-"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="0"
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="."
          onPress={() => console.log("Button pressed")}
          color="#dcdcdc"
        />
        <Button
          title="="
          onPress={() => console.log("Button pressed")}
          color="#ff8731"
        />
      </Row>
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
