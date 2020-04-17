import React, { useLayoutEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

function Navigation() {
  useLayoutEffect(() => {
    const a = document.querySelector(".choosenOne");
    const b = document.querySelector(".div--animation ");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <header>
      <h1>Exercises</h1>

      <div className="div--lineHeader"></div>

      <div className="div--animation"></div>

      <div className="div--wrapper">
        <NavLink to="/" exact activeClassName="choosenOne">
          Home
        </NavLink>

        <NavLink to="/gallery" activeClassName="choosenOne">
          Gallery
        </NavLink>

        <NavLink to="/about" activeClassName="choosenOne">
          About
        </NavLink>

        <NavLink to="/contact" activeClassName="choosenOne">
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
