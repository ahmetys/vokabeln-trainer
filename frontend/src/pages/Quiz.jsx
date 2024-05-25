import { useEffect, useState } from "react";
import { useWordList, useWordListDispatch } from "../WordListContext";
import { getQuiz } from "../utils/getQuiz";
function Quiz() {
  const wordList = useWordList();
  const dispatch = useWordListDispatch();
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    setQuiz(getQuiz(wordList, 5));
  }, []);

  return <div>CONTACT</div>;
}

export default Quiz;
