import {ADD_CASH, GET_CASH, CLEAR_DATA_CASH} from "./types";


//refactor
export const addCashActionCreator = (cash) => ({
  type: ADD_CASH,
  payload: cash
})

export const getCashActionCreator = (cash) => ({
  type: GET_CASH,
  payload: cash
})

export const clearDataCashActionCreator = (cash) => ({
  type: CLEAR_DATA_CASH,
  payload: cash
})
