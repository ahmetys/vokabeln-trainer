import Arabs from "./Arabs";
import Roms from "./Roms";
import Translations from "./Translations";

function Hits({ hits }) {
  return (
    <>
      {hits[0].type === "translation" && <Translations translations={hits}></Translations>}
      {hits.map((hit, i) => {
        return (
          <div key={i} className="mb-5">
            {hit.roms && <Roms roms={hit.roms}></Roms>}
            {hit.arabs && <Arabs arabs={hit.arabs}></Arabs>}
          </div>
        );
      })}
    </>
  );
}

export default Hits;
