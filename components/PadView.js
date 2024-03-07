import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";
import Row from "./Row";

export default function PadView({ onButtonPress }) {

  return (
    <>
      <Row>
        <CalculatorButton title="%" onButtonPress={onButtonPress} color="#ff8731" />
        <CalculatorButton title="C" onButtonPress={onButtonPress} color="#ff8731" />
        <CalculatorButton title="←" onButtonPress={onButtonPress} color="#ff8731" />
        <CalculatorButton title="/" onButtonPress={onButtonPress} color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="8" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="7" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="9" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="X" onButtonPress={onButtonPress} color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="4" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="5" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="6" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="-" onButtonPress={onButtonPress} color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="1" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="2" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="3" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="+" onButtonPress={onButtonPress} color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="+/-" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="0" onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="." onButtonPress={onButtonPress} color="#dcdcdc" />
        <CalculatorButton title="=" onButtonPress={onButtonPress} color="#ff8731" />
      </Row>
    </>
  );
}
