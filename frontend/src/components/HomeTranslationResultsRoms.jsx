import HomeTranslationResultsArabs from "./HomeTranslationResultsArabs";

function HomeTranslationResultsRoms({ roms }) {
  return (
    <>
      {roms.map((rom, index) => {
        return (
          <div key={index}>
            <h1 className="border-bottom border-secondary">{rom.headword}</h1>
            <HomeTranslationResultsArabs arabs={rom.arabs}></HomeTranslationResultsArabs>
          </div>
        );
      })}
    </>
  );
}

export default HomeTranslationResultsRoms;
