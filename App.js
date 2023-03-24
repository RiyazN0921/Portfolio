import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router';

import Header from './Portfolio/Components/Header/Header';
import Home from './Portfolio/Components/Home/Home';
import About from './Portfolio/Components/About/About';
import Services from './Portfolio/Components/Services/Services';
import Portfolios from './Portfolio/Components/Portfolio/Portfolio';
import Blog from './Portfolio/Components/Blog/Blog';
import Contact from './Portfolio/Components/Contact/Contact';
import Footer from './Portfolio/Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Services" element={<Services />}></Route>
              <Route path="/Portfolio" element={<Portfolios />}></Route>
              <Route path="/Blog" element={<Blog />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
