function Translations({ translations }) {
  return (
    <>
      {translations.map((translation, i) => {
        return (
          <div key={i}>
            {translation && (
              <>
                <span dangerouslySetInnerHTML={{ __html: translation.source }} />
                :
                <span dangerouslySetInnerHTML={{ __html: translation.target }} />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Translations;
