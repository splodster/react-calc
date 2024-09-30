import { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import CalculatorContainer from "./components/CalculatorContainer";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState<string | null>(null);

  const handleInput = (label: string) => {
    if (label === "C") {
      setInput("0");
      setResult(null);
      return;
    } else if (label === "=") {
      try {
        const cleanedInput = input.replace(/×/g, "*").replace(/÷/g, "/");
        const evalResult = eval(cleanedInput);
        setResult(evalResult.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prevInput) => (prevInput === "0" ? label : prevInput + label));
    }
  };

  return (
    <>
      <CalculatorContainer>
        <Display value={result || input} />
        <ButtonGrid onBtnClick={handleInput} />
      </CalculatorContainer>
    </>
  );
}

export default App;
