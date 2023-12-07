const incrementCounterActionCreator = () =>  ({
  type: "INCREMENT_COUNTER"
})

const decrementCounterActionCreator = () => ({
    type: "DECREMENT_COUNTER"
  }
)

const clearDataCounterActionCreator = () => ({
   type: "CLEAR_DATA_COUNTER"
  }
)

export {
  incrementCounterActionCreator,
  decrementCounterActionCreator,
  clearDataCounterActionCreator
}
