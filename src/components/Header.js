import React from 'react';

function Header({ handlePage }) {

    return (
        <div className='bg-red text-white text-xl flex items-center justify-between px-4 py-2'>
            <p className="cursor-pointer hover:text-gold transition" onClick={() => handlePage('about')}>About Me</p>
            <p className="cursor-pointer hover:text-gold transition" onClick={() => handlePage('portfolio')}>Portfolio</p>
            <p className="cursor-pointer hover:text-gold transition" onClick={() => handlePage('resume')}>Resume</p>
            <p className="cursor-pointer hover:text-gold transition" onClick={() => handlePage('contact')}>Contact</p>
        </div>
    )

}

export default Header;