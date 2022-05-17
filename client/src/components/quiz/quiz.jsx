import React, { Component } from "react";
import { data } from "../../data/quizData";
import "../../styles/quiz.css";
export class quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useranswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  //Component that holds the current quiz
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current question index
    this.setState(() => {
      return {
        question: data[currentIndex].question,
        options: data[currentIndex].options,
        answer: data[currentIndex].answer,
      };
    });
  };

  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
    //Check if correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  //Check the answer
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: data[currentIndex].question,
          options: data[currentIndex].options,
          answer: data[currentIndex].answer,
        };
      });
    }
  }

  finishHandler = () => {
    if (this.state.currentIndex === data.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state

    if (quizEnd) {
      return (
        <div>
          <h1>Game Over. Final score is {this.state.score} points</h1>
          <p>The correct Answers for the quiz are</p>
          <ul>
            {data.map((item, index) => (
              <li className="ui floating message options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <h2 className="uiQuestion">{question}</h2>
        <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">
          {`${currentIndex}/${data.length - 1}`}
        </span>
        {/* <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">{`Question ${currentIndex} of ${
          data.length - 1
        }`}</span> */}
        {options.map(
          (
            option //for each option, new paragraph
          ) => (
            <div
              key={option.id}
              className={`uifloatingmessageoptions
                ${userAnswer === option ? "selected" : null}
                `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </div>
          )
        )}
        {currentIndex < data.length - 1 && (
          <button
            className="button-29"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
        )}
        {currentIndex === data.length - 1 && (
          <button
            className="button-29"
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >
            Finish
          </button>
        )}
      </div>
    );
  }
}

export default quiz;
