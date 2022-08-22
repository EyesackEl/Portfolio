import React, { useState } from 'react';
import NavBar from './navbar';
import Footer from './footer'
import About from './pages/aboutMe';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Contact from './pages/contact';


export default function Container() {
    const [pageOn, setPageOn] = useState('About Me');
    
    const styles = {
        fullHeight: {
            height: '100vh',
        }
    };

    const renderPage = () => {
        if (pageOn === 'About Me') {
            return <About handlePageChange={handlePageChange}/>;
        }
        else if (pageOn === 'Portfolio') {
            return <Portfolio />;
        }
        else if (pageOn === 'Resume') {
            return <Resume />;
        }
        else if (pageOn === 'Contact') {
            return <Contact />;
        }
        else return <About />;
    }

    const handlePageChange = (page) => setPageOn(page);

    return (
        <body class='columns is-flex-direction-column' style={styles.fullHeight}>
            <NavBar pageOn = {pageOn} handlePageChange={handlePageChange} />

            {renderPage()}

            <Footer />
        </body>
    );
}