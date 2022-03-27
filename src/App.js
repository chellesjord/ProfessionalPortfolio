import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Projects from './components/Projects';


function App() {
  const [categories] = useState([
    { name: "Portfolio", description: "Links to my GitHub repositories" },
    { name: "Resume", description: "Resume" },
    { name: "Social Media", description: "Social Media links such as LinkedIn, GitHub, etc." },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
