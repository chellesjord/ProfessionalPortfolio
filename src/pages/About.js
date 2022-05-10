import React from 'react';
import profileImage from "../../src/assets/cover/profileimage.jpg";

const AboutPage = () => {
    return (
        <main>
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div className="my-2">
                <img src={profileImage} className="my-2 img" style={{ width: "20%" }} alt="Michelle Jordan" />
                <p className="my-2">
                I am a creative Full-Stack Engineer from San Antonio, TX with six-months experience developing, programming, testing, and collaborating with a team to create a variety of high-quality applications such as HTML, CSS Javascript, JQuery, React, Bootstrap, PURE, NodeJS, MySQL, MongoDB, Express, Node, Handlebars, AWS, and Webpack using GitHub and Heroku. I'm eager to excel in all phases of software development to enhance client business operations. 
                </p>
                
            </div>
        </section>
        </main>
    );
};

export default AboutPage;