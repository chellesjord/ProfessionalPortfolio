import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/"> Michelle Jordan </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <span
                                onClick={() => { setCurrentCategory(category) }}>
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;