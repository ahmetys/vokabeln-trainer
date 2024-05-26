const getRandomIndex = (array) => (Array.isArray(array) ? Math.floor(Math.random() * (array.length - 1)) : new Error("is not an array"));
const getQuiz = (array, limit) => {
  let quiz = [];
  let filteredArray = array;

  const createQuestion = () => {
    const questionIndex = getRandomIndex(filteredArray);
    const question = { question: filteredArray[questionIndex].source, answer: filteredArray[questionIndex].target, options: [filteredArray[questionIndex].target] };
    filteredArray = filteredArray.filter((q, i) => i !== questionIndex);
    const createOptions = (array) => {
      let filteredOptionArray = array;
      const optionIndex = getRandomIndex(filteredOptionArray);
      (function asd(arr, i) {
        console.log(arr);
        if (!question.options.includes(arr[i].target)) {
          question.options.push(arr[i].target);
          filteredOptionArray = filteredOptionArray.filter((q, i) => i !== optionIndex);
        }
        if (question.options < 4) {
          console.log(0);
          asd();
        }
      })asd(filteredOptionArray, optionIndex);
    };
    createOptions(filteredArray);
    quiz = [...quiz, question];
    quiz.length < limit && createQuestion();
  };
  createQuestion();
  return quiz;
};

export { getQuiz };
