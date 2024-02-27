import { connect } from "react-redux";

const Display = ({ name, age, clear }) => {
  return (
    <div>
      <hr />
      {name !== "" ? <h1>My name is {name}</h1> : null}
      {age !== "" ? <h2>My Age is {age}</h2> : null}
      {name !== "" || age !== "" ? (
        <button onClick={clear}>Clear</button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
});

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch({ type: "CLEAR" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
