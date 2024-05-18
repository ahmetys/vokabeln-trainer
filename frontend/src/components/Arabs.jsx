import Translations from "./Translations";
function Arabs({ children, arabs }) {
  return (
    <>
      {arabs.map((arab, i) => {
        return (
          <div key={i} className="mb-3">
            {arab.header && <h4 className="bg-light border-bottom border-dark p-1" dangerouslySetInnerHTML={{ __html: arab.header }} />}
            <Translations translations={arab.translations}></Translations>
          </div>
        );
      })}
    </>
  );
}

export default Arabs;
