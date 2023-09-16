// src/Redux/IncrementReducer.js
import { Increment } from "./IncrementTypes"; 
import { Decrement } from "./IncrementTypes"; // Assuming INCREMENT is a string constant

const initialState = {
  count: 0
}

const IncrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case Increment:  // Using INCREMENT constant instead of Increment
      return {
        ...state,
        count: state.count + 1
      }
      case Decrement:
        if(state.count>0){
        return{
            ...state,
            count: state.count - 1
        }  
    }
    default:
      return state
  }
}

export default IncrementReducer
