import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";
import Row from "./Row";

export default function PadView() {
  return (
    <>
      <Row>
        <CalculatorButton title="C" color="#ff8731" />
        <CalculatorButton title="%" color="#ff8731" />
        <CalculatorButton title="←" color="#ff8731" />
        <CalculatorButton title="/" color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="7" color="#dcdcdc" />
        <CalculatorButton title="8" color="#dcdcdc" />
        <CalculatorButton title="9" color="#dcdcdc" />
        <CalculatorButton title="X" color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="4" color="#dcdcdc" />
        <CalculatorButton title="5" color="#dcdcdc" />
        <CalculatorButton title="6" color="#dcdcdc" />
        <CalculatorButton title="-" color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="1" color="#dcdcdc" />
        <CalculatorButton title="2" color="#dcdcdc" />
        <CalculatorButton title="3" color="#dcdcdc" />
        <CalculatorButton title="+" color="#ff8731" />
      </Row>
      <Row>
        <CalculatorButton title="+/-" color="#dcdcdc" />
        <CalculatorButton title="0" color="#dcdcdc" />
        <CalculatorButton title="." color="#dcdcdc" />
        <CalculatorButton title="=" color="#ff8731" />
      </Row>
    </>
  );
}
