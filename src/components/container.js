import React, { useState } from 'react';
import NavBar from './navbar';
import About from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Contact from './pages/contact';

export default function container() {
    const [pageOn, setPageOn] = useState('About Me');

    const renderPage = () => {
        if (pageOn === 'About Me') {
            return <About />;
        };
        if (pageOn === 'Portfolio') {
            return <Portfolio />
        };
        if (pageOn === 'Resume') {
            return <Resume />
        };
        if (pageOn === 'Contact') {
            return <Contact />
        };
    }

    const handlePageChange = (page) => setPageOn(page);

    return (
        <div>
            <NavBar pageOn = {pageOn} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    )
}