import { useState } from "react";

export const useCalculator = () => {
  const [number, setNumber] = useState("0");

  const clean = () => {
    setNumber("0");
  };

  const deleteOperation = () => {
    if (number.length === 1) {
      return setNumber("0");
    }

    setNumber(number.slice(0, -1));
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const buildNumber = (num: string) => {
    if (number.includes(".") && num === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      // Punto decimal
      if (num === ".") {
        return setNumber(number + num);
      }

      if (num === "0" && number.includes(".")) {
        return setNumber(number + num);
      }

      if (num !== "0" && !number.includes(".")) {
        return setNumber(num);
      }

      if (num === "0" && !number.includes(".")) return;

      return setNumber(number + num);
    }

    return setNumber(number + num);
  };

  return {
    number,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
  };
};
