import React from 'react';

function Header({ handlePage, page }) {
  return (
    <div className='bg-purple text-xl flex items-center justify-between px-4 py-2'>
      <h1 className='text-black font-bold text-3xl cursor-pointer'>CHANSE SHIRLEY</h1>
      <p
        className={`${
          page === 'about' ? 'text-black text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('about')}
      >
        About Me
      </p>
      <p
        className={`${
          page === 'portfolio' ? 'text-vlack text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('portfolio')}
      >
        Portfolio
      </p>
      <p
        className={`${
          page === 'resume' ? 'text-black text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('resume')}
      >
        Resume
      </p>
      <p
        className={`${
          page === 'contact' ? 'text-black text-2xl shadow-glow' : 'text-white'
        } hover:text-gold transition cursor-pointer`}
        onClick={() => handlePage('contact')}
      >
        Contact
      </p>
    </div>
  );
}

export default Header;
