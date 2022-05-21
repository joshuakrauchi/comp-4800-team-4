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
    <div>
      <h1>Game Over. Final score is {score} points!</h1>
      <p>The correct answers are:</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.answer}</li>
        ))}
      </ul>
      <Button
        disabled={false}
        onClick={() => props.onComplete(score === data.length - 1)}
        text="Get Badge"
      />
    </div>
  ) : (
    <div className={styles.quizContainer}>
      <span className={styles.question}>{question}</span>
      <div className={styles.questionContainer}>
        {options.map((option, index) => (
          <div
            className={
              styles.answer +
              " " +
              (userAnswer === option ? "bg-crabOrange" : "bg-white")
            }
            key={index}
            onClick={() => CheckAnswer(option)}
          >
            <p className={styles.questionLetter}>{`${letteredOptions[index]}.`}</p>
            <p>{option}</p>
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
        {currentIndex === data.length - 1 && (
          <Button
            text="See Results"
            onClick={EndGame}
            disabled={disabled}
            buttonStyle="disabled:opacity-75"
          />
        )}
        <span>{`${currentIndex} / ${data.length - 1}`}</span>
      </div>
    </div>
  );
};

export default Quiz;
