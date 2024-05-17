import FlagIconTR from "../assets/svg/FlagIconTR";
import FlagIconDE from "../assets/svg/FlagIconDE";
import HomeTranslationResultsRoms from "./HomeTranslationResultsRoms";
function HomeTranslationResultsLanguages({ languages }) {
  console.log(languages);
  return (
    <div className="card mb-5">
      <div className="card-header">
        {languages.lang === "de" ? (
          <>
            <FlagIconDE />
            »
            <FlagIconTR />
          </>
        ) : (
          <>
            <FlagIconTR />
            »
            <FlagIconDE />
          </>
        )}
      </div>

      <div className="card-body">
        {languages.hits?.map((hit, index) => {
          return <HomeTranslationResultsRoms key={index} roms={hit.roms}></HomeTranslationResultsRoms>;
        })}
      </div>
    </div>
  );
}

export default HomeTranslationResultsLanguages;
