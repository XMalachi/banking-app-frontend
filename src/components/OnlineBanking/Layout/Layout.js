import React from 'react'
import BankingNavbar from './Navbar/BankingNavbar'
import BankingSidebar from './Sidebar/BankingSidebar'

function Layout({children}) {
  return (
    <div>
        <BankingNavbar  />
        <BankingSidebar />
        <div className=' ml-14 p-5 bg-blue-100 h-full md:min-h-screen'>
            {children}
        </div>
    </div>
  )
}

export default Layout