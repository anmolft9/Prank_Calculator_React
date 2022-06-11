import "./App.css";
import { useState } from "react";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

const operators = ["+", "-", "*", "/"];

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState([]); //using state to store the last operator

  const handleOnClick = (val) => {
    if (val === "AC") {
      setStr("");
      return;
    }

    if (val === "=") {
      return onTotal();
    }

    if (val === "C") {
      const temStr = str.slice(0, -1);
      setStr(temStr);
      return;
    }

    if (operators.includes(val)) {
      setLastOperator(val);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        const strWithoutLastChar = str.slice(0, -1);
        setStr(strWithoutLastChar + val);
        return;
      }
    }

    if (val === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        // const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);
        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + val); ///concating the string
  };

  const onTotal = () => {
    const ttl = eval(str);
    setStr(ttl.toFixed(2).toString());
  };
  return (
    <div className="wrap">
      <div className="circle"></div>
      <div className="container">
        <Display str={str} />

        <ButtonArea handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

export default App;
