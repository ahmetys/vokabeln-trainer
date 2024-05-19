import FlagIconTR from "../assets/svg/FlagIconTR";
import FlagIconDE from "../assets/svg/FlagIconDE";

function Flags({ lang }) {
  return (
    <>
      {lang === "de" ? (
        <>
          <FlagIconDE />
          <span>🡆</span>
          <FlagIconTR />
        </>
      ) : (
        <>
          <FlagIconTR />
          »
          <FlagIconDE />
        </>
      )}
    </>
  );
}

export default Flags;
