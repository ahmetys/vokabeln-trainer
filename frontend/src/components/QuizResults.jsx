import { useEffect, useState } from "react";
import { getQuiz } from "../utils/getQuiz";
import { useWordList, useWordListDispatch } from "../WordListContext";

function QuizResults({ quiz, setQuiz, setCount }) {
  const wordList = useWordList();
  const handleClick = () => {
    setCount(0);
    setQuiz(getQuiz(wordList, 5));
  };
  const [results, setResults] = useState({ correct: 0, wrong: 0 });
  useEffect(() => {
    let correct = 0;
    let wrong = 0;
    quiz.map((item) => {
      item.target === item.yourAnswer ? correct++ : wrong++;
    });
    setResults({ correct: correct, wrong: wrong });
  }, []);
  return (
    <>
      <div>
        <span>
          <strong>Quizergebnisse</strong>
        </span>
        <hr />
      </div>
      <div>
        {
          <span>
            <strong>Richtig:</strong>
            {results.correct}
          </span>
        }
      </div>
      <div className="mb-2">
        {
          <span>
            <strong>Falsch:</strong>
            {results.wrong}
          </span>
        }
      </div>
      <div>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Erneut Starten
        </button>
      </div>
    </>
  );
}

export default QuizResults;
