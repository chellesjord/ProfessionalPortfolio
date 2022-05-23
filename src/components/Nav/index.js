import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Michelle Jordan
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/about">About me</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2">
            <Link to="/gallery">My Apps</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;