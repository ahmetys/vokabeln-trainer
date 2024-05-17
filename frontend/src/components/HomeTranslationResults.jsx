import HomeTranslationResultsLanguages from "./HomeTranslationResultsLanguages";
function HomeTranslationResults({ translation }) {
  return (
    <div>
      {translation.map((lang, index) => {
        return <HomeTranslationResultsLanguages key={index} languages={lang}></HomeTranslationResultsLanguages>;
      })}
    </div>
  );
}

export default HomeTranslationResults;
