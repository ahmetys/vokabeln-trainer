import { useState } from "react";
import Flags from "./Flags";

function Card({ word }) {
  const [css, setCss] = useState(false);

  return (
    <div className={`card bg-primary-subtle mx-3  ${css && "anime"}`} onClick={() => setCss(true)}>
      <div className="card-header">
        <Flags lang={css ? "de" : "tr"}></Flags>
      </div>
      <div className="card-body">
        <div dangerouslySetInnerHTML={{ __html: word.source }} className={`${!css ? "d-none" : "d-block"}`}></div>
        <div dangerouslySetInnerHTML={{ __html: word.target }} className={`${css ? "d-none" : "d-block"}`}></div>
      </div>
    </div>
  );
}

export default Card;
