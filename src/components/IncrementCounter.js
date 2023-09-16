import React from "react";
import { Incrementing } from "../Redux/IncrementAction";
import { Decrementing } from "../Redux/DecrementAction";
import { connect } from "react-redux";
import "./incrementCounter.css"
function IncrementCounter(props) {
  return (
    <div className="counterContainer">
    <button className="btn" onClick={props.Decrement}>-</button>
      <h2 className="counterNumber">Counter-<span className="numberColor">{props.count}</span></h2>
      <button  className="btn" onClick={props.Increment}>+</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => dispatch(Incrementing()),
    Decrement: ()=> dispatch(Decrementing()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IncrementCounter);
