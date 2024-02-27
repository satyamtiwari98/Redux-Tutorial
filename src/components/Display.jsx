import { connect } from "react-redux";

const Display = ({ name, age, city, liveIn, clear, selected }) => {
  const handleChange = (event) => {
    const selectedCity = event.target.value;
    selected(selectedCity);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a city</option>
        {city.map((ele, index) => {
          return (
            <option value={ele} key={index}>
              {ele}
            </option>
          );
        })}
      </select>
      <hr />
      {name !== "" ? <h1>My name is {name}</h1> : null}
      {age !== "" ? <h2>My Age is {age}</h2> : null}

      {name !== "" || age !== "" || liveIn !== "" ? (
        <button onClick={clear}>Clear</button>
      ) : null}

      {liveIn !== "" ? <h3>I live in {liveIn}.</h3> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
  city: state.city,
  liveIn: state.liveIn,
});

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch({ type: "CLEAR" }),
  selected: (city) => dispatch({ type: "SELECTED", ele: city }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
