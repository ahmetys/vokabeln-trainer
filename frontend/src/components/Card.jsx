import { useState } from "react";
import Flags from "./Flags";
import { useSwipeable } from "react-swipeable";
function Card({ word }) {
  const [css, setCss] = useState(false);
  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: true, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },
  };
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log(eventData.dir);
      eventData.dir === "Up" ? setCss(true) : console.log("yukari");
    },
    ...config,
  });

  //TEK BIR DIV ICERISINDE SOURCE VE TARGET GÖSTERILECEK
  //TOUCH EVENT TETIKLENDIGINDE CSS NTH-CHILD ILE TARGET FADE IN EFEKTI ILE GÖSTERILECEK
  return (
    <div className={`card bg-primary-subtle mx-3  flip-card-inner ${css && "flip-card-innerr"}`} {...handlers}>
      <div className={`card-body py-5 flip-card-front`}>
        {/* <div className="card-header">
          <Flags lang={css ? "de" : "tr"}></Flags>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: word.source }} className="py-5 text-center"></div>
      </div>
      <div className={`card-body py-5 flip-card-back ${css && "flip-card-innerr"}`}>
        <div dangerouslySetInnerHTML={{ __html: word.target }} className="py-5 text-center"></div>
      </div>
    </div>
  );
}

export default Card;
