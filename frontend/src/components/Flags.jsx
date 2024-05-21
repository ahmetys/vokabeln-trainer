import FlagIconTR from "../assets/svg/FlagIconTR";
import FlagIconDE from "../assets/svg/FlagIconDE";

function Flags({ lang }) {
  return (
    <div className=" d-flex align-items-center">
      {lang === "de" ? (
        <>
          <FlagIconDE />
          <span>🡆</span>
          <FlagIconTR />
        </>
      ) : (
        <>
          <FlagIconTR />
          <span>🡆</span>
          <FlagIconDE />
        </>
      )}
    </div>
  );
}

export default Flags;
