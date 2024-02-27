// If your application has multiple reducers, you can combine them into one using combineReducers
// import { combineReducers } from "redux";

const initialState = {
  counter: 0,
  name: "",
  age: "",
  city: ["Lucknow", "Delhi", "Prayagraj"],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NAME":
      return { ...state, name: action.name };
    case "ADD_AGE":
      return { ...state, age: action.age };
    case "CLEAR":
      return { ...state, name: "", age: "" };
    default:
      return state;
  }
};

// Combine Reducers
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   // Add other reducers here if you have more
// });

export default counterReducer;
// export default rootReducer;
