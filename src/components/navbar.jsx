import React, {useState} from 'react';

export default function Navbar({ pageOn, handlePageChange }) {
    const [burgerState, setBurgerState] = useState(false);

    return (
    <nav class="navbar is-dark has-shadow column is-narrow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand content">
            <h4 class="navbar-item">The Isaac LaFlamme Experience</h4>
            <btn role="button"
             onClick={() => !burgerState ? setBurgerState(true) : setBurgerState(false)}
             className={!burgerState ? 'navbar-burger' : 'navbar-burger is-active'} aria-label="menu" aria-expanded="true" data-target="navbarContent">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </btn>
        </div>
        <div id="navbarContent" 
        className={!burgerState ? 'navbar-menu' : 'navbar-menu is-active'}>
            <div class="navbar-end">
                <a 
                 href="#about" 
                 onClick={() => handlePageChange('About Me')}
                 className={pageOn === 'About Me' ? 'navbar-item is-active' : 'navbar-item'}
                >
                    About Me
                </a>
                <a 
                 href="#portfolio" 
                 onClick={() => handlePageChange('Portfolio')}
                 className={pageOn === 'Portfolio' ? 'navbar-item is-active' : 'navbar-item'}
                >
                    Portfolio
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <btn class="navbar-link">
                        Like What You See?
                    </btn>
                    <div class="navbar-dropdown">
                        <a 
                         href="#contact" 
                         onClick={() => handlePageChange('Contact')}
                         className={pageOn === 'Contact' ? 'navbar-item is-active' : 'navbar-item'}
                        >
                            Contact
                        </a>
                        <a 
                         href="#resume" 
                         onClick={() => handlePageChange('Resume')}
                         className={pageOn === 'Resume' ? 'navbar-item is-active' : 'navbar-item'}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}