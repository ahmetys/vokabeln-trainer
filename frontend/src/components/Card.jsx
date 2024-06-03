import FavoriteIcon from "./FavoriteIcon";

function Card({ word }) {
  return (
    <div className="card bg-warning-subtle mx-3 word-card" role="button">
      <div className="card-body">
        <div className="text-center p-5  fw-bold" dangerouslySetInnerHTML={{ __html: word.source }}></div>
        <div className="text-center p-5 " dangerouslySetInnerHTML={{ __html: word.target }}></div>
        <FavoriteIcon key={word.target} source={word.source} target={word.target}></FavoriteIcon>
      </div>
    </div>
  );
}

export default Card;
