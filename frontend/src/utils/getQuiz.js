const getRandomIndex = (array) => (Array.isArray(array) ? Math.floor(Math.random() * (array.length - 1)) : new Error("is not an array"));
const getQuiz = (array, limit) => {
  let quiz = [];
  let filteredArray = array;

  const createQuestion = () => {
    const questionIndex = getRandomIndex(filteredArray);

    const options = () => {
      let options = [];
      options = [
        !options.includes(filteredArray[getRandomIndex(filteredArray)].target) && filteredArray[getRandomIndex(filteredArray)].target,
        !options.includes(filteredArray[getRandomIndex(filteredArray)].target) && filteredArray[getRandomIndex(filteredArray)].target,
        !options.includes(filteredArray[getRandomIndex(filteredArray)].target) && filteredArray[getRandomIndex(filteredArray)].target,
        !options.includes(filteredArray[getRandomIndex(filteredArray)].target) && filteredArray[getRandomIndex(filteredArray)].target,
      ];
      options[getRandomIndex(options)] = array[questionIndex].target;
      return options;
    };
    const question = { question: filteredArray[questionIndex].source, answer: filteredArray[questionIndex].target, options: options() };
    filteredArray = filteredArray.filter((q, i) => i !== questionIndex);
    console.log(filteredArray);
    quiz = [...quiz, question];
    quiz.length < limit && createQuestion();
  };
  createQuestion();
  console.log(quiz);
  return quiz;
};

export { getQuiz };
