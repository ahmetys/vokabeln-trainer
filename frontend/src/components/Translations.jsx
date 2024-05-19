import FavoriteIcon from "./FavoriteIcon";

function Translations({ translations }) {
  return (
    <>
      {translations.map((translation, i) => {
        return (
          <div key={i} className="d-flex justify-content-between">
            {translation && (
              <>
                <div>
                  <span dangerouslySetInnerHTML={{ __html: translation.source }} />
                  :
                  <span dangerouslySetInnerHTML={{ __html: translation.target }} />
                </div>
                <FavoriteIcon key={translation.target} source={translation.source} target={translation.target}></FavoriteIcon>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Translations;
