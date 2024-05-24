import { useEffect } from "react";
import { useWordList, useWordListDispatch } from "../WordListContext";
function Quiz() {
  const wordList = useWordList();
  const dispatch = useWordListDispatch();
  const createQuestion = (array) => {
    let questions = [];
    const questionIndex = Math.floor(Math.random() * array.length - 1);
    const newArray = array.filter((item, index) => index !== questionIndex);
    const options = () => {
      let options = [];
      const randomOptionIndex = Math.floor(Math.random() * (array.length - 2));
      const randomOptionArray = wordList.filter((item, index) => index !== questionIndex);
      options = [...options, randomOptionArray[randomOptionIndex].target];
      options[Math.floor(Math.random() * 4)] = array[questionIndex].target;
      return options;
    };
    console.log(options());
    console.log(array[questionIndex]);
    questions = [...questions, { question: array[questionIndex].source, answer: array[questionIndex].target, options: options() }];
    if (questions.length < 5) {
      createQuestion(newArray);
    }
    return questions;
  };

  console.log(createQuestion(wordList));

  return <div>CONTACT</div>;
}

export default Quiz;
