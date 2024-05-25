import React from "react";
import { NavLink } from "react-router-dom";

function TabMenu() {
  return (
    <>
      <ul className="nav nav-pills d-flex justify-content-around bg-light fixed-bottom border-top py-2">
        <NavLink className="nav-link" to="/">
          Suche
        </NavLink>
        <NavLink className="nav-link" to="/cards">
          Karten
        </NavLink>
        <NavLink className="nav-link" to="/quiz">
          Quiz
        </NavLink>
      </ul>
    </>
  );
}

export default TabMenu;
