import React from "react";

export default class TestList extends React.Component {
  constructor() {
    super();
    this.state = {
      testList: [
        {
          title: "1 + 1",
          correctAnswer: "2",
        },
        {
          title: "1 + 2",
          correctAnswer: "3",
        },
        {
          title: "1 + 3",
          correctAnswer: "4",
        },
        {
          title: "1 + 4",
          correctAnswer: "5",
        },
        {
          title: "1 + 5",
          correctAnswer: "6",
        },
      ],
      activePage: 0,
      isCorrect: false,
      cssClass: "hide",
      showResults: false,
    };
  }
  checkAnswer = () => {
    const {
      state: { testList, activePage },
      props: { inputValues },
    } = this;

    if (testList[activePage].correctAnswer === inputValues[activePage]) {
      return this.setState({ isCorrect: true });
    }
    return this.setState({ isCorrect: false });
  };

  updateAnswers = () => {
    const {
      state: { isCorrect, activePage },
      props: { updateAnswer },
    } = this;
    return updateAnswer(activePage, isCorrect);
  };

  handleInputChange = async ({ target: { value } }) => {
    const {
      state: { activePage },
      props: { changeInputValue },
    } = this;
    await changeInputValue(activePage, value);
    this.checkAnswer();
    this.updateAnswers();
  };

  prevPage = () => {
    const { activePage } = this.state;
    this.setState({ activePage: activePage - 1 });
  };

  nextPage = () => {
    const { activePage } = this.state;
    this.setState({ activePage: activePage + 1 });
  };
  render() {
    const {
      state: { testList, activePage, showResults },
      props: { inputValues, answers },
    } = this;

    let page = (
      <div>
        <p>{testList[activePage].title}</p>
        <input value={inputValues[activePage]} onChange={this.handleInputChange}></input>
        <button onClick={activePage === 0 ? "" : this.prevPage}>Previous</button>
        <button onClick={activePage === testList.length - 1 ? "" : this.nextPage}>Next</button>
      </div>
    );
    if (showResults) {
      page = testList.map((question, i) => (
        <div>
          <p>{question.title}</p>
          <p>
            Ваш ответ: {inputValues[i]}{" "}
            {answers[i] ? "Правильно" : `Неправильно. Правильный ответ: ${testList[i].correctAnswer}`}
          </p>
        </div>
      ));
    }
    return (
      <div>
        {page}
        <button
          className={
            testList.length - 1 === activePage
              ? () => this.setState({ cssClass: "show" })
              : this.state.cssClass
          }
          onClick={
            showResults
              ? () => this.setState({ showResults: false })
              : () => this.setState({ showResults: true })
          }
        >
          {showResults ? "Back" : "Check"}
        </button>
        {}
      </div>
    );
  }
}
