import { useEffect, useState } from "react";
import { getQuiz } from "../utils/getQuiz";
import { useWordList, useWordListDispatch } from "../WordListContext";

function QuizResults({ quiz, setQuiz, setCount }) {
  const wordList = useWordList();
  const handleClick = () => {
    setQuiz(getQuiz(wordList, 5));
    setCount(0);
  };
  const [results, setResults] = useState({ true: 0, false: 0 });
  useEffect(() => {
    quiz.map((item) => {
      item.answer === item.yourAnswer ? setResults({ ...results, true: results.true + 1 }) : setResults({ ...results, false: results.false + 1 });
    });
  }, []);
  return (
    <>
      <div>
        <span>
          <strong>Results</strong>
        </span>
        <hr />
      </div>
      <div>
        {
          <span>
            <strong>Richtig:</strong>
            {results.true}
          </span>
        }
      </div>
      <div className="mb-2">
        {
          <span>
            <strong>Falsch:</strong>
            {results.false}
          </span>
        }
      </div>
      <div>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Tekrar Basla
        </button>
      </div>
    </>
  );
}

export default QuizResults;
