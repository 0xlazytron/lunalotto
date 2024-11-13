import React from 'react'
import Footer from './Pages/Footer'
import Nav from './Pages/Nav'
import Home from './Pages/Home'

function Layout({ children }) {
    return (
        <div className='relative'>
            <Nav />
            {children}
 
            <Footer />
        </div>
    )
}

export default Layout