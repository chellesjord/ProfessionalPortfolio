import React from 'react';
import photo from '../../assets/small/personal-crypto-tracker.png';

function Projects(props) {
  const currentCategory = {
    name: "Portfolio",
    description: "Photos and links to my GitHub repositories"
  };

  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <img src={photo} alt="Personal Crypto Tracker Screenshot" className='img-thumbnail mx-1' />
    </section>
  );
}
export default Projects;