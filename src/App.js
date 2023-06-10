import Calculator from './components/Calculator';
import './components/calculator.css';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="app-container">
      <div className="quote-container">
        <Quotes />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
