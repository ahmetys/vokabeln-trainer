import { useState } from "react";

function FavoriteIcon({ source, target }) {
  const [fav, setFav] = useState(false);
  const handleClick = () => {
    setFav((prev) => !prev);
    console.log(source, target);
  };
  return (
    <div>
      <i className={`bi fs-4 bi-heart${fav ? "-fill text-danger" : ""}`} onClick={handleClick} role="button"></i>
    </div>
  );
}

export default FavoriteIcon;
