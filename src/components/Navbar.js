import React from "react";
// import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  sticky-top" >
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav  mx-auto">
              <li>
                <NavLink className="px-4 links" to="/todo">
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink className="px-4 links" to="/listtodo">
                  TodoList
                </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
