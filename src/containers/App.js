import React from "react";
import { connect } from "react-redux";

import { updateAnswer, changeInputValue } from "../actions/actionCreator";
import TestList from "../components/TestList";

class App extends React.Component {
  render() {
    const { answers, inputValues, updateAnswer, changeInputValue } = this.props;
    return (
      <TestList
        answers={answers}
        updateAnswer={updateAnswer}
        inputValues={inputValues}
        changeInputValue={changeInputValue}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    answers: store.answers,
    inputValues: store.inputValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnswer: (id, isCorrect) => dispatch(updateAnswer(id, isCorrect)),
    changeInputValue: (id, value) => dispatch(changeInputValue(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
