import HomeTranslationResultsTranslations from "./HomeTranslationResultsTranslations";
function HomeTranslationResultsArabs({ arabs }) {
  return (
    <>
      {arabs.map((arab, index) => {
        return (
          <div key={index} className="mb-5">
            <HomeTranslationResultsTranslations translations={arab.translations}></HomeTranslationResultsTranslations>
          </div>
        );
      })}
    </>
  );
}

export default HomeTranslationResultsArabs;
