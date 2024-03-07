import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { handleButtonPress } from "../utils/ButtonLogics";

export default function CalculatorButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 30,
        backgroundColor: color,
        borderRadius: 25,
        margin: 5,
        marginVertical: -40,
        alignItems: "center",
      }}
      onPress={()=>handleButtonPress(title)}
    >
      <Text style={{ color: "#fff", fontSize: 30 }}>{title}</Text>
    </TouchableOpacity>
  );
}