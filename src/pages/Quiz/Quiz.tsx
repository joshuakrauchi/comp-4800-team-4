import { useEffect, useState } from "react";
import { data } from "../../data/quizData";
import Button from "../../components/Buttons/Button/Button";
import styles from "./styles";

interface IQuizProps {
  badgeName: string;
  onComplete: (hasWonQuiz: boolean) => void;
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

  const NextQuestion = (): void => {
    if (userAnswer === answer) setScore(score + 1);
    setCurrentIndex(currentIndex + 1);
    setDisabled(true);
  };

  const CheckAnswer = (ans: string): void => {
    setUserAnswer(ans);
    setDisabled(false);
  };

  const EndGame = (): void => {
    if (currentIndex === data.length - 1) setQuizEnd(true);
    setDisabled(true);
  };

  useEffect((): void => {
    setQuestion(data[currentIndex].question);
    setOptions(data[currentIndex].options);
    setAnswer(data[currentIndex].answer);
  }, [currentIndex]);

  useEffect((): void => {
    setQuestion(data[currentIndex].question);
    setOptions(data[currentIndex].options);
    setAnswer(data[currentIndex].answer);
  }, [currentIndex]);

  return quizEnd ? (
    <div className="flex flex-col h-screen">
      <h1>Game Over!</h1>
      <span>You scored</span>
      <div className="h-[90%] flex flex-col justify-end">
        <h1
          className={`font-bold text-9xl ${
            score === data.length - 1 ? "text-crabOrange" : null
          }`}
        >
          {score}
        </h1>
      </div>
      <div className="h-[100%] flex flex-col justify-end">
        <Button
          disabled={false}
          onClick={() => props.onComplete(score === data.length - 1)}
          text={score === data.length - 1 ? "Get Badge" : "Next"}
          buttonStyle="self-end"
        />
      </div>
    </div>
  ) : (
    <div className={styles.quizContainer}>
      <div className="w-[100%] h-[15%] flex flex-col self-center justify-start">
        <p className={styles.question}>{question}</p>
      </div>
      <div className={styles.questionContainer}>
        {options.map((option, index) => (
          <div
            className={`
              ${styles.answer}
              ${userAnswer === option ? "bg-crabOrange" : "bg-white"}
            `}
            key={index}
            onClick={() => CheckAnswer(option)}
          >
            <p
              className={styles.questionLetter}
            >{`${letteredOptions[index]}.`}</p>
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="h-fit flex flex-col pt-6 justify-center">
        {currentIndex < data.length - 1 && (
          <Button
            text="Next Question"
            onClick={NextQuestion}
            disabled={disabled}
            buttonStyle="disabled:opacity-75 self-end"
          />
        )}
        {currentIndex === data.length - 1 && (
          <Button
            text="See Results"
            onClick={EndGame}
            disabled={disabled}
            buttonStyle="disabled:opacity-75 self-end"
          />
        )}
        <span>{`${currentIndex} / ${data.length - 1}`}</span>
      </div>
    </div>
  );
};

export default Quiz;
