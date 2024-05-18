import Arabs from "./Arabs";

function Roms({ roms }) {
  return (
    <>
      {roms.map((rom, i) => {
        return (
          <div key={i} className="mb-5">
            <h2 className="bg-secondary-subtle border-bottom border-dark p-1" dangerouslySetInnerHTML={{ __html: rom.headword_full }} />
            <Arabs arabs={rom.arabs}></Arabs>
          </div>
        );
      })}
    </>
  );
}

export default Roms;
