import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCashActionCreator, clearDataCashActionCreator, getCashActionCreator} from "../../redux/cash/action";
import {CLEAR_DATA_CASH} from "../../redux/cash/types";

const Balance = () => {
  const cashState = useSelector(state => state.cashReducer.cash)
  const dispatch = useDispatch();
  return(
    <div>
      balance - {cashState}
      <button onClick={() => dispatch(addCashActionCreator(Number(prompt())))}>
        пополнить
      </button>
      <button onClick={() => dispatch(getCashActionCreator( Number(prompt())))}>
        снять
      </button>
      <button onClick={() => dispatch(clearDataCashActionCreator())}>Очистить данные баланса</button>
    </div>
  )
}

export default Balance;

