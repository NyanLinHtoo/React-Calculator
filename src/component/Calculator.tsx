import { Parser } from "expr-eval";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [inputText, setInputText] = useState("0");
  const [operator, setOperator] = useState(false);

  const evaluation = (text: string) => {
    try {
      setOperator(true);
      console.log("evaluation");
      const totalCalculate = Parser.evaluate(text);
      return totalCalculate.toString();
    } catch (error) {
      console.log("eva error==>");
      console.log(error);
      return "Error";
    }
  };

  const handleButtonClick = (value: string) => {
    setInputText((prev) => {
      if (prev === "0" || prev === "Error" || operator) {
        console.log("in HBC");
        console.log(prev);

        return value;
      }
      return prev + value;
    });
    setOperator(false);
  };

  const handleSpecialFunction = (func: string) => {
    setInputText((prev) => {
      const num = parseFloat(prev);
      switch (func) {
        case "1/x":
          console.log("in case 1/x");
          console.log((1 / num).toString());

          return (1 / num).toString();
        case "x^2":
          console.log("in case x^2");
          console.log((num * num).toString());

          return (num * num).toString();
        case "√x":
          console.log("in case √x");
          console.log(Math.sqrt(num).toString());

          return Math.sqrt(num).toString();
        case "+/-":
          console.log("in case +/-");
          console.log((-num).toString());

          return (-num).toString();
        default:
          return prev;
      }
    });
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key;
    if (/[0-9+\-*/.%]/.test(key)) {
      handleButtonClick(key);
    } else if (key === "Enter") {
      setInputText(evaluation(inputText));
    } else if (key === "Backspace") {
      setInputText((prev) => prev.slice(0, -1) || "0");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputText]);

  const buttonClasses =
    "w-full h-14 text-lg font-medium text-white bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-200";

  return (
    <div className="max-w-xs mx-auto mt-10 bg-gray-800 rounded-2xl shadow-2xl p-4">
      <div className="mb-4">
        <input
          type="text"
          className="w-full h-16 text-right text-2xl bg-gray-900 text-white px-4 rounded-xl"
          value={inputText}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "%",
          "AC",
          "C",
          "⌫",
          "1/x",
          "x^2",
          "√x",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "+/-",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "AC") setInputText("0");
              else if (btn === "C") setInputText("0");
              else if (btn === "⌫")
                setInputText((prev) => {
                  if (!/[0-9+\-*/.%]/.test(prev)) {
                    return "0";
                  } else {
                    return prev.slice(0, -1) || "0";
                  }
                });
              else if (btn === "=") setInputText(evaluation(inputText));
              else if (["1/x", "x^2", "√x", "+/-"].includes(btn))
                handleSpecialFunction(btn);
              else handleButtonClick(btn);
            }}
            className={`${buttonClasses} ${
              ["⌫"].includes(btn) ? "bg-red-700 hover:bg-red-600" : ""
            } ${btn === "=" ? "bg-green-700 hover:bg-green-600" : ""}`}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
