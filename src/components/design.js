import React from 'react';

const Calculator = () => (
  <div className="calculator-container">
    <div className="calculator__output-screen">0</div>
    <table className="calculator__numbers-container">
      <tbody>
        <tr className="calculator__row">
          <td className="num">AC</td>
          <td className="num">+/-</td>
          <td className="num">%</td>
          <td className="calculator__operator">÷</td>
        </tr>
        <tr className="calculator__row">
          <td className="num">7</td>
          <td className="num">8</td>
          <td className="num">9</td>
          <td className="calculator__operator">&times;</td>
        </tr>
        <tr className="calculator__row">
          <td className="num">4</td>
          <td className="num">5</td>
          <td className="num">6</td>
          <td className="calculator__operator">-</td>
        </tr>
        <tr className="calculator__row">
          <td className="num">1</td>
          <td className="num">2</td>
          <td className="num">3</td>
          <td className="calculator__operator">+</td>
        </tr>
        <tr className="calculator__row">
          <td className="num" colSpan="2">0</td>
          <td className="num"> . </td>
          <td className="calculator__operator">=</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Calculator;
