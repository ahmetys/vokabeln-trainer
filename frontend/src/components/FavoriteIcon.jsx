import { useEffect, useState } from "react";
import { useWordListDispatch, useWordList } from "../context/WordListContext";

function FavoriteIcon({ source, target }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useWordListDispatch();
  const wordList = useWordList();
  useEffect(() => {
    wordList.some((word) => word.source === source && word.target === target) && setIsFavorited(true);
  });
  function handleClick() {
    if (!isFavorited) {
      dispatch({
        type: "add",
        payload: {
          source: source,
          target: target,
        },
      });
      setIsFavorited(true);
    } else {
      dispatch({
        type: "remove",
        payload: {
          source: source,
          target: target,
        },
      });
      setIsFavorited(false);
    }
  }
  return (
    <div>
      <i className={`bi fs-4 bi-heart${isFavorited ? "-fill text-danger" : ""}`} onClick={handleClick} role="button"></i>
    </div>
  );
}

export default FavoriteIcon;
