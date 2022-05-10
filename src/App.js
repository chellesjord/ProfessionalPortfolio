import React from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';


import Nav from './components/Nav';
// import About from './components/About';
// import Projects from './components/Projects';
// import ContactForm from './components/Contact';
import Footer from './components/Footer';

import AboutPage from "./pages/About";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<AboutPage/>} />
            <Route exact path="/about" element={<AboutPage/>} />
            <Route component={NoMatch} />
          </Routes>
          <Footer/>
        </main>
        </HashRouter>
    </div>
  );
}

export default App;
