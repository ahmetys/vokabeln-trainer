import Roms from "./Roms";

function Hits({ hits }) {
  return (
    <>
      {hits.map((hit, i) => {
        return (
          <div key={i} className="mb-5">
            <Roms roms={hit.roms}></Roms>
          </div>
        );
      })}
    </>
  );
}

export default Hits;
