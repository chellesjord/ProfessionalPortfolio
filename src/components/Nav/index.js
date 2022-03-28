import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// TO DO: workout the aboutSelected section to help with selective rendering

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected
  } = props;

  const handleClick = (item) => {
    return item;
  };

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
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Resume')}>
              Resume
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;