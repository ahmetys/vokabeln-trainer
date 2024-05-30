import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Fehler</h1>
      <p>Seite nicht gefunden!</p>
      <Link to="/" className="btn btn-primary">
        Gehe Startseite
      </Link>
    </div>
  );
}

export default PageNotFound;
