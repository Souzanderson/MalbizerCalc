import { useState } from "react";
import { Container, NoSelection } from "../../styles";
import { buttons } from "./buttons";
import {
  ButtonItem,
  ButtonsStruct,
  Display,
  Fuze,
  Malbizer,
  Struct,
} from "./calculadora.styles";

export const Calculadora = () => {
  const [textDisplay, setTextDisplay] = useState("0");
  const [operation, setOperation] = useState(null);
  const [accumulator, setAccumulator] = useState(0);
  const [lastButton, setLastButton] = useState(null);

  const setDisplay = (value) => {
    value = Number(Number(value).toFixed(8)).toString();
    setTextDisplay(value);
  };

  const result = () => {
    if (operation) {
      let value = eval(accumulator + operation + textDisplay);
      setDisplay(value);
      setAccumulator(value);
      setOperation(null);
    }
  };

  const lastIsOperation = () =>
    lastButton === "*" ||
    lastButton === "/" ||
    lastButton === "+" ||
    lastButton === "-";

  const handleClick = (bt) => {
    console.log(bt);
    console.log(textDisplay);
    setLastButton(bt.value);

    if (!isNaN(bt.value)) {
      if (textDisplay === "0" || operation) setDisplay(String(bt.value));
      else setDisplay(textDisplay + String(bt.value));
    } else {
      switch (bt.value) {
        case "del":
          if (textDisplay.length > 1)
            setDisplay(textDisplay.substring(0, textDisplay.length - 1));
          else setDisplay("0");
          break;
        case "CE":
          setDisplay("0");
          break;
        case "C":
          setDisplay("0");
          setAccumulator(0);
          setOperation(null);
          break;
        case ".":
          setTextDisplay(textDisplay + String(bt.value));
          break;
        case "/":
        case "*":
        case "-":
        case "+":
          if (lastIsOperation()) {
            setOperation(bt.value);
            setAccumulator(Number(textDisplay));
          } else if (operation) {
            result();
            setOperation(bt.value);
          } else {
            setOperation(bt.value);
            setAccumulator(Number(textDisplay));
            setDisplay("0");
          }
          break;
        case "=":
          result();
          break;
        default:
          break;
      }
    }
  };

  const getBts = () => {
    return buttons.map((bt) => {
      if (bt.label === "=") {
        return (
          <ButtonItem cstart="3" cend="5" onClick={() => handleClick(bt)} key={bt.label}>
            <NoSelection>{bt.label}</NoSelection>
          </ButtonItem>
        );
      }
      return (
        <ButtonItem onClick={() => handleClick(bt)} key={bt.label}>
          <NoSelection>{bt.label}</NoSelection>
        </ButtonItem>
      );
    });
  };

  return (
    <Container>
      <Struct>
        <Fuze>
          <Malbizer>
            <NoSelection>M.A.L.B.I.Z.E.R.</NoSelection>
          </Malbizer>
          <Display>
            <NoSelection>{textDisplay}</NoSelection>
          </Display>
          <ButtonsStruct>{getBts()}</ButtonsStruct>
        </Fuze>
      </Struct>
    </Container>
  );
};
