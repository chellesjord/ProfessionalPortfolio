import React from 'react';

function Nav() {
    const categories = [
        {name: "Portfolio", description: "Links to my GitHub projects"},
        {name: "Resume", description: "Resume"},
        {name: "Social Media", description: "Social Media links such as LinkedIn, GitHub, etc."},
    ];

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
                        <li
                            className='mx-1' key={category.name} >
                            <span onClick={() => { handleClick(); }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;