import { connect } from "react-redux";

const Counter = ({
  counter,
  name,
  age,
  increment,
  decrement,
  add_name,
  add_age,
}) => {
  return (
    <div>
      <p>Counter : {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => add_name(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Age"
        onChange={(e) => add_age(e.target.value)}
      />
      <hr />
      {name}
    </div>
  );
};
// The mapStateToProps function connects the component to the Redux store, letting it access the counter value from the store’s state.

const mapStateToProps = (state) => ({
  counter: state.counter,
  name: state.name,
  age: state.age,
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

// The mapDispatchToProps function connects the component to dispatch actions, enabling it to send “INCREMENT” or “DECREMENT” signals to the Redux store to update the counter value.
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  add_name: (name) => dispatch({ type: "ADD_NAME", name: name }),
  add_age: (age) => dispatch({ type: "ADD_AGE", age: age }),
});

// Finally, by using connect from react-redux, the Counter component gets linked to the Redux store, allowing it to both read and change the counter value in the app’s state

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
