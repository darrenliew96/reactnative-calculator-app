import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function Button({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        paddingVertical: 30,
        backgroundColor: color,
        borderRadius: 100,
        margin: 5,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}