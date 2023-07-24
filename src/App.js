import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const [page, setPage] = useState('about')

  const handlePage = (name) => {
    setPage(name)
}


  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <About />
    }
  }

  return (
    <div className='font-rem flex flex-col min-h-screen'>
      <div className="header-app">
        <Header handlePage={handlePage} />
      </div>
      <div className="content flex-grow bg-black text-white">{renderPage()}</div>
      <div className="footer-app">
        <Footer />
      </div>
    </div>
  );
}

export default App;