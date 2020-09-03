import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer';

function Layout(props) {
    return (
        <div>
            <header className='App-header'>
                <Nav />
            </header>
            <section className='App-content'>
                <div >
                    {props.children}
                </div>
            </section>
            <footer className='App-footer'>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;