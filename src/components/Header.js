import React from 'react';

function Header({ handlePage }) {

    return (
        <div>
            <p onClick={() => handlePage('about')}>About Me</p>
            <p onClick={() => handlePage('portfolio')}>Portfolio</p>
            <p onClick={() => handlePage('resume')}>Resume</p>
            <p onClick={() => handlePage('contact')}>Contact</p>
        </div>
    )

}

export default Header;