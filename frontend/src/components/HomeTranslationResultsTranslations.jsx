function HomeTranslationResultsTranslations({ translations }) {
  console.log(translations);
  return (
    <>
      {translations.map((translation, index) => {
        return (
          <div key={index}>
            <span dangerouslySetInnerHTML={{ __html: translation.source }} />=<strong>{translation.target}</strong>
          </div>
        );
      })}
    </>
  );
}

export default HomeTranslationResultsTranslations;
