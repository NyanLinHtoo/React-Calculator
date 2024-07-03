import { Parser } from "expr-eval";
import { useState } from "react";

const Calculator = () => {
  const [inputText, setInputText] = useState("");
  const [operator, setOperator] = useState(false);

  const evaluation = (text: string) => {
    try {
      const totalCalculate = Parser.evaluate(text);
      return totalCalculate;
    } catch (error) {
      return "Error";
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-32 bg-green-600">
      <div className="text-center py-3">
        <p className="bg-slate-200 h-10 text-center px-10">{inputText}</p>
        <div className="bg-slate-500 m-10">
          <div>
            <button
              onClick={() => console.log("Placeholder for MC")}
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              MC
            </button>
            <button
              onClick={() => console.log("Placeholder for MR")}
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              MR
            </button>
            <button
              onClick={() => console.log("Placeholder for M+")}
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              M+
            </button>
            <button
              onClick={() => console.log("Placeholder for M-")}
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              M-
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                setOperator(true);
                inputText === ""
                  ? "0" + (e.target as HTMLButtonElement).value
                  : setInputText(
                      (prev) => prev + (e.target as HTMLButtonElement).value
                    );
              }}
              value="%"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              %
            </button>
            <button
              onClick={() => {
                setInputText("");
              }}
              value="AC"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              AC
            </button>
            <button
              onClick={() => {
                setInputText("");
              }}
              value="C"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              C
            </button>
            <button
              onClick={() => {
                const digits = Array.from(inputText);
                digits.pop();
                const newText = digits.join("");
                setInputText(newText);
              }}
              value="undo"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              Undo
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                console.log(e.target.value);
              }}
              value="1/x"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              1/x
            </button>
            <button
              onClick={(e) => {
                console.log(e.target.value);
              }}
              value="x*2"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              x*2
            </button>
            <button
              onClick={(e) => {
                console.log(e.target.value);
              }}
              value="rootx"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              rootx
            </button>
            <button
              onClick={(e) => {
                setInputText(
                  (prev) => prev + (e.target as HTMLButtonElement).value
                );
              }}
              value="/"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              /
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="7"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              7
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="8"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              8
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="9"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              9
            </button>
            <button
              onClick={(e) => {
                setInputText(
                  (prev) => prev + (e.target as HTMLButtonElement).value
                );
              }}
              value="*"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              *
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="4"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              4
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="5"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              5
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="6"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              6
            </button>
            <button
              onClick={(e) => {
                setInputText(
                  (prev) => prev + (e.target as HTMLButtonElement).value
                );
              }}
              value="-"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              -
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="1"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              1
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="2"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              2
            </button>
            <button
              onClick={(e) => {
                if (typeof inputText === "string") {
                  setInputText(
                    (prev) => prev + (e.target as HTMLButtonElement).value
                  );
                } else {
                  setInputText((e.target as HTMLButtonElement).value);
                }
              }}
              value="3"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              3
            </button>
            <button
              onClick={(e) => {
                setInputText(
                  (prev) => prev + (e.target as HTMLButtonElement).value
                );
              }}
              value="+"
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              +
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              +/-
            </button>
            <button
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              0
            </button>
            <button
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              .
            </button>
            <button
              onClick={() => {
                const total = evaluation(inputText);
                // setInputText((prev) => prev + e.target.value);
                setInputText(total);
                console.log(total);
              }}
              value="="
              type="button"
              className="w-14 h-14 text-md font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-700">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
