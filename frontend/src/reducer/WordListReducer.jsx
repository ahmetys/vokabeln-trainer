export function wordListReducer(wordList, action) {
  switch (action.type) {
    case "add":
      return [...wordList, { source: action.payload.source, target: action.payload.target }];
      break;
    case "remove":
      return wordList.filter((word) => word.source !== action.payload.source && word.target !== action.payload.target);
      break;

    default:
      break;
  }
}
