import './App.css';
import {useState} from 'react';
import CounterApp from "./components/counter";
import Balance from "./components/balance";

function App() {
  const handleIncrementCounter = () => {
    setCounter(prev=>prev + 1)
  }

  const handleDecrementCounter = () => {
    setCounter(prev=>prev - 1)
  }
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>With UseState</p>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {counter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      <p>-----------------------------------</p>
      <p>With React-Redux</p>
      <CounterApp />
      <p>-----------------------------------</p>
      <Balance />

    </div>
  );
}

export default App;
