import React, {useLayoutEffect} from "react";
import {Link} from 'react-router-dom';

import './styles.scss';

export default function Navegation(props) {
  useLayoutEffect(() => {
    const a = document.querySelector(".choosenOne");
    const b = document.querySelector(".div--animation ");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <>
    <header>
      <h1>Exercises</h1>

      <div className="div--lineHeader"></div>

      <div className="div--animation"></div>

      <div className="div--wrapper">
        <Link className={props.name === "/" ? "choosenOne" : null} to="/">
          Home
        </Link>
        <Link className={props.name === "/gallery" ? "choosenOne" : null} to="/gallery">
          Gallery
        </Link>
        <Link className={props.name === "/about" ? "choosenOne" : null} to="/about">
          About
        </Link>
        <Link className={props.name === "/contact" ? "choosenOne" : null} to="/contact">
          Contact
        </Link>
      </div>
      </header>
    </>
  );
}
