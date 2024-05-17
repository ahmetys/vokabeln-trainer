import React from "react";
import { NavLink } from "react-router-dom";

function TabMenu() {
  return (
    <>
      <ul className="nav nav-pills d-flex justify-content-around bg-white fixed-bottom border-top py-2" id="pills-tab" role="tablist">
        {/* <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            Home
          </button>          
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
            Contact
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>
            Disabled
          </button>
        </li> */}

        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </ul>
      {/* 
        
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          ...
        </div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
          ...
        </div>
        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
          ...
        </div>
      */}
    </>
  );
}

export default TabMenu;
