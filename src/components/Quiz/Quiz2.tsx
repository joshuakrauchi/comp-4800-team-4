import React, { useEffect, useState } from "react";
import { data } from "../../data/quizData";
import Button from "../Button";

interface IQuizProps {
  badgeName: string;
  onComplete: (outcome: boolean) => boolean;
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
  const letteredOptions = ["A", "B", "C", "D", "E", "F", "G"];

  const LoadQuiz = (): void => {
    setQuestion(data[currentIndex].question);
    setOptions(data[currentIndex].options);
    setAnswer(data[currentIndex].answer);
  };

  const NextQuestion = (): void => {
    if (userAnswer == answer) setScore(score + 1);
    setCurrentIndex(currentIndex + 1);
    setDisabled(true);
  };

  const CheckAnswer = (ans: string) => {
    setUserAnswer(ans);
    setDisabled(false);
  };

  const EndGame = (): void => {
    if (currentIndex == data.length - 1) setQuizEnd(true);
    setDisabled(true);
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
      <Button
        disabled={disabled}
        onClick={() => props.onComplete(score == data.length - 1)}
        text="Get Badge"
      />
    </div>
  ) : (
    <div className="bg-[#CFD4D9] flex flex-col h-screen">
      <h2 className="text-center font-bold w-[80%] self-center py-5 text-xl">
        {question}
      </h2>
      <div className="flex flex-col">
        {options.map((option, index) => (
          <div
            className={`cursor-pointer self-center flex flex-row w-[85%] space-x-4 rounded-lg ${
              userAnswer == option ? "bg-[#F89734]" : "bg-white"
            } my-3 py-3 px-3`}
            key={index}
            onClick={() => CheckAnswer(option)}
          >
            <p className="font-bold">{`${letteredOptions[index]}.`}</p>
            <p className="font-normal">{option}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col pt-6">
        {currentIndex < data.length - 1 && (
          <Button
            text="Next Question"
            onClick={NextQuestion}
            disabled={disabled}
            buttonStyle="disabled:opacity-75"
          />
        )}
        {currentIndex == data.length - 1 && (
          <Button
            text="See Results"
            onClick={EndGame}
            disabled={disabled}
            buttonStyle="disabled:opacity-75"
          />
        )}
        <span className="self-center">{`${currentIndex} / ${
          data.length - 1
        }`}</span>
      </div>
    </div>
  );
};

export default Quiz;
