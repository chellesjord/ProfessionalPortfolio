import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Screenshots and links to my GitHub applications',
    },
    {
      name: 'Resume',
      description: 'View my resume in the web browser or click the link download',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {/* TO DO: try to make a better if else statement for presenting data when clicked */}

        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
