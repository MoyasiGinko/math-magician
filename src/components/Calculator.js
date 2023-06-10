import React, { useState } from 'react';
import calculate from '../logic/calculate';
import AppDesign from './design';
import './calculator.css';
import Quotes from './quotes';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    const buttonValue = event.target.textContent;
    const updatedCalculatorData = calculate(calculatorData, buttonValue);
    setCalculatorData(updatedCalculatorData);

    const { total, operation, next } = updatedCalculatorData;

    // Update the result display
    if (operation && next) {
      setResult(`${total} ${operation} ${next}`);
    } else if (operation) {
      setResult(`${total} ${operation}`);
    } else {
      setResult(next || total || '0');
    }
  };
  return (
    <div className="app-container">
      <div className="quote-container">
        <Quotes />
      </div>
      <div className="calculator-container">
        <AppDesign handleButtonClick={handleButtonClick} result={result} />
      </div>
    </div>
  );
};

export default Calculator;
