import Flags from "./Flags";
import Hits from "./Hits";

function Langs({ langs }) {
  return (
    <>
      {langs.map((lang, i) => {
        return (
          <div key={i} className="card mb-5">
            <div className="card-header">
              <Flags lang={lang.lang}></Flags>
            </div>
            <div className="card-body py-1">
              <Hits hits={lang.hits}></Hits>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Langs;
