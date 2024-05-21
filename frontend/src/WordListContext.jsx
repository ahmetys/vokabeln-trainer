import { createContext, useContext, useEffect, useReducer } from "react";
import { wordListReducer } from "./WordListReducer";
const WordListContext = createContext(null);
const WordListDispatchContext = createContext(null);
const initialWordList = localStorage.getItem("wordList") === null ? [] : JSON.parse(localStorage.getItem("wordList"));
export function WordListProvider({ children }) {
  const [wordList, dispatch] = useReducer(wordListReducer, initialWordList);
  useEffect(() => {
    localStorage.setItem("wordList", JSON.stringify(wordList));
  }, [wordList]);
  return (
    <WordListContext.Provider value={wordList}>
      <WordListDispatchContext.Provider value={dispatch}>{children}</WordListDispatchContext.Provider>
    </WordListContext.Provider>
  );
}

export function useWordList() {
  return useContext(WordListContext);
}

export function useWordListDispatch() {
  return useContext(WordListDispatchContext);
}
