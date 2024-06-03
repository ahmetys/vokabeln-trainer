import { useState } from "react";

function Question({ quiz, setQuiz, count, setCount }) {
  const [yourAnswer, setYourAnswer] = useState("");
  const handleClick = () => {
    if (yourAnswer !== "") {
      setCount((prev) => prev + 1);
      setQuiz((prev) =>
        prev.map((item, index) => {
          if (index === count) {
            const nextItem = { ...item, yourAnswer: yourAnswer };
            return nextItem;
          } else {
            return item;
          }
        })
      );
    } else {
      alert("Wählen Sie bitte eine Option aus!");
    }
  };
  const handleChange = (e) => {
    setYourAnswer(e.target.value);
  };
  return (
    <>
      <div className="d-flex justify-content-end">
        <span>
          <strong>
            {count + 1}/{quiz.length}
          </strong>
        </span>
      </div>
      <div>
        <span dangerouslySetInnerHTML={{ __html: quiz[count].source }} />
        <hr />
      </div>
      <div>
        {quiz[count].options.map((item, index) => {
          return (
            <div key={index} className="form-check mb-2">
              <input onChange={handleChange} value={item} className="form-check-input" type="radio" name="flexRadioDefault" id={`radio-${index}`} />
              <label dangerouslySetInnerHTML={{ __html: item }} className="form-check-label" htmlFor={`radio-${index}`}></label>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={handleClick} type="button" className="btn btn-primary">
          {count + 1 === quiz.length ? "Fertig" : "Nächste Frage"}
        </button>
      </div>
    </>
  );
}

export default Question;
