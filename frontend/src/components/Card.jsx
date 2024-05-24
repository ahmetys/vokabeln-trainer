import Flags from "./Flags";

function Card({ word }) {
  return (
    <div className="card bg-primary-subtle mx-3 word-card">
      <div className="card-body">
        <div className="text-center p-5  fw-bold" dangerouslySetInnerHTML={{ __html: word.source }}></div>
        <div className="text-center p-5 " dangerouslySetInnerHTML={{ __html: word.target }}></div>
      </div>
    </div>
  );
}

export default Card;
