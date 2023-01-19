import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import InfoBar from './InfoBar/InfoBar'
import ContactBar from './ContactBar/ContactBar'

function Layout({children}) {
    
    return (
        <div>
    
            <InfoBar />
            <ContactBar />
            <Navbar />
        
            <div>
                {children}
            </div>
            
            <Footer />

        </div>
    )
}

export default Layout