import React from "react";

function Footer() {
    return (
        <section className="mt-auto footer flex-row px-1">
            <h1>My Links</h1>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="https://github.com/chellesjord">GitHub </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.linkedin.com/in/chellesjord/"> LinkedIn</a>
                </li>
                <li className="mx-2">
                    <a href = "mailto: m.kayejordan@gmail.com">email: m.kayejordan@gmail.com</a>
                </li>
            </ul>
        </section>
    )
}


export default Footer;