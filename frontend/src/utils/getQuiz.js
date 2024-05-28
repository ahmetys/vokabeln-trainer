const getRandomIndex = (arr, n = 1) => {
  if (n > 1) {
    let indexes = [];
    for (let i = 0; i < n; i++) {
      const getIndex = () => {
        const index = Math.floor(Math.random() * (arr.length - 1));
        if (indexes.includes(index)) {
          getIndex();
        } else {
          indexes.push(index);
        }
      };
      getIndex();
    }
    return indexes;
  } else {
    const index = Math.floor(Math.random() * arr.length);
    return index;
  }
};
const getOptions = (array, oindex) => {
  let newArray = array.filter((item, index) => index !== oindex);
  let options = [];
  for (let i = 0; i < 4; i++) {
    const optionIndex = getRandomIndex(newArray);
    options = [...options, newArray[optionIndex].target];
    newArray = newArray.filter((item, index) => index !== optionIndex);
  }
  return options;
};

const getQuiz = (array, limit) => {
  let quiz = [];
  array.map((item, index) => {
    item.options = getOptions(array, index);
    const optionIndex = getRandomIndex(item.options);
    console.log(optionIndex);
    item.options[optionIndex] = item.target;
    quiz = [...quiz, item];
  });
  return quiz;
};

export { getQuiz };
