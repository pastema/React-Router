import { connect } from "react-redux";
import CounterGroup from "../component/CounterGroup";



fetch("http://localhost:6969/api/todos", {mode: 'cors'}).then(res => res.json()).then(res => console.log(res))

fetch("http://localhost:6969/api/todos", {method: 'POST', headers: new Headers({
    'Content-Type': 'application/json'
  }), mode: 'cors', body: JSON.stringify({content: "aaaa", status: "active"})}).then(res => res.json()).then(res => console.log(res))

const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counterArr: state.counterArr
});
const mapDispatchToProps = dispatch => ({
  decreaseNumber: (changedNum, id) =>
    dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    }),
  increaseNumber: (changedNum, id) =>
    dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    }),
  counterUpdateCallback: changedNum =>
    dispatch({
      type: "COUNTERSUM",
      payload: changedNum
    }),
  genrateCounters: counterNum =>
    dispatch({
      type: "GENERATECOUNTERS",
      payload: parseInt(counterNum)
    }),
  clearCounterSum: () =>
    dispatch({
      type: "CLEARSUM"
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterGroup);
