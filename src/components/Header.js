import React from 'react';

function Header({ handlePage, page }) {
  return (
    <div className='bg-red text-xl flex items-center justify-between px-4 py-2'>
      <h1 className='text-gold font-bold text-3xl cursor-pointer'>CHANSE SHIRLEY</h1>
      <p
        className={`${
          page === 'about' ? 'text-gold text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('about')}
      >
        About Me
      </p>
      <p
        className={`${
          page === 'portfolio' ? 'text-gold text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('portfolio')}
      >
        Portfolio
      </p>
      <p
        className={`${
          page === 'resume' ? 'text-gold text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('resume')}
      >
        Resume
      </p>
      <p
        className={`${
          page === 'contact' ? 'text-gold text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('contact')}
      >
        Contact
      </p>
    </div>
  );
}

export default Header;
