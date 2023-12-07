import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearDataCounterActionCreator,
  decrementCounterActionCreator,
  incrementCounterActionCreator
} from "../../redux/counter/actions";

const CounterApp = () => {
  const dispatch = useDispatch();
  const stateCounter = useSelector(state => state.counterReducer.counter);
  const handleIncrementCounter = () => {
   dispatch(incrementCounterActionCreator());
  }

  const handleDecrementCounter = () => {
    dispatch(decrementCounterActionCreator());
  }

  const handleClearDataCounter = () => {
    dispatch(clearDataCounterActionCreator());
  }
  return(
    <div>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {stateCounter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      <button onClick={handleClearDataCounter}>Очистить данные счетчика</button>
    </div>
  )
}

export default CounterApp;