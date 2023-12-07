import {DECREMENT_COUNTER,  INCREMENT_COUNTER, CLEAR_DATA_COUNTER} from "./types";

//accepts state and actions
const initialState = {
  counter: 0
}

export const counterReducer = (state=initialState, action) => {
   switch (action.type){
     case INCREMENT_COUNTER:
       return {
         ...state,
         counter: state.counter+1
       }

     case DECREMENT_COUNTER:
       return {
         ...state,
         counter: state.counter-1
       }
     case CLEAR_DATA_COUNTER:
       return {
         counter: 0
       }
     default:
       return state;
   }
}

