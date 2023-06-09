import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

const AppDesign = () => {
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
    <div className="main-app">
      <div className="calculator__output-screen">{result}</div>
      <table className="calculator__numbers-container">
        <tbody>
          <tr className="calculator__row">
            <td className="num">
              <Button click={handleButtonClick} text="AC" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="+/-" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="%" />
            </td>
            <td className="calculator__operator">
              <Button click={handleButtonClick} text="÷" />
            </td>
          </tr>
          <tr className="calculator__row">
            <td className="num">
              <Button click={handleButtonClick} text="7" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="8" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="9" />
            </td>
            <td className="calculator__operator">
              <Button click={handleButtonClick} text="x" />
            </td>
          </tr>
          <tr className="calculator__row">
            <td className="num">
              <Button click={handleButtonClick} text="4" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="5" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="6" />
            </td>
            <td className="calculator__operator">
              <Button click={handleButtonClick} text="-" />
            </td>
          </tr>
          <tr className="calculator__row">
            <td className="num">
              <Button click={handleButtonClick} text="1" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="2" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="3" />
            </td>
            <td className="calculator__operator">
              <Button click={handleButtonClick} text="+" />
            </td>
          </tr>
          <tr className="calculator__row">
            <td className="num" colSpan="2">
              <Button click={handleButtonClick} text="0" />
            </td>
            <td className="num">
              <Button click={handleButtonClick} text="." />
            </td>
            <td className="calculator__operator">
              <Button click={handleButtonClick} text="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppDesign;
