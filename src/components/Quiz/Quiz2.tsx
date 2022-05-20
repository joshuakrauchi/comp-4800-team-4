import React, { useEffect, useState } from "react";
import { data } from "../../data/quizData";

interface IQuizProps {
  badgeName: string;
  onComplete: (state: boolean) => boolean;
}

const Quiz = (props: IQuizProps): JSX.Element => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [quizEnd, setQuizEnd] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const LoadQuiz = (): void => {
    setQuestion(data[currentIndex].question);
    setOptions(data[currentIndex].options);
    setAnswer(data[currentIndex].answer);
  };

  const NextQuestion = (): void => {
    if (userAnswer == answer) setScore(score + 1);
    setCurrentIndex(currentIndex + 1);
  };

  const CheckAnswer = (ans: string) => {
    setUserAnswer(ans);
    setDisabled(false);
  };

  const EndGame = (): void => {
    if (currentIndex == data.length - 1) setQuizEnd(true);
  };

  useEffect((): void => {
    LoadQuiz();
  }, []);

  useEffect((): void => {
    setQuestion(data[currentIndex].question);
    setOptions(data[currentIndex].options);
    setAnswer(data[currentIndex].answer);
  }, [currentIndex]);

  return quizEnd ? (
    <div>
      <h1>Game Over. Final score is {score} points!</h1>
      <p>The correct answers are:</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.answer}</li>
        ))}
      </ul>
      <button disabled={disabled} onClick={() => props.onComplete(score == data.length - 1)}>Finish</button>
    </div>
  ) : (
    <div>
      <h2>{question}</h2>
      <span>{`${currentIndex} / ${data.length - 1}`}</span>
      {options.map((option, index) => (
        <div key={index} onClick={() => CheckAnswer(option)}>
          {option}
        </div>
      ))}
      {currentIndex < data.length - 1 && (
        <button disabled={disabled} onClick={NextQuestion}>
          Next Question
        </button>
      )}
      {currentIndex == data.length - 1 && (
          <button disabled={disabled} onClick={EndGame}>Finish</button>
      )}
    </div>
  );
};

export default Quiz;
