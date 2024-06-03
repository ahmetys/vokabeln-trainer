import { useEffect, useState } from "react";
import { useWordList, useWordListDispatch } from "../context/WordListContext";
import { getQuiz } from "../utils/getQuiz";
import Question from "../components/Question";
import QuizResults from "../components/QuizResults";
function Quiz() {
  const wordList = useWordList();
  const dispatch = useWordListDispatch();
  const [quiz, setQuiz] = useState(getQuiz(wordList, 5));
  const [count, setCount] = useState(0);
  return <div className="px-2">{count > quiz.length - 1 ? <QuizResults quiz={quiz} setQuiz={setQuiz} setCount={setCount} /> : <Question key={count} quiz={quiz} setQuiz={setQuiz} count={count} setCount={setCount} />}</div>;
}

export default Quiz;
