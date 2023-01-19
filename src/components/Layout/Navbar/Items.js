
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Items() {
    const solutions = [
        { name: 'Tax Planning', href: '/services/tax' },
        {name: 'Investment Planning', href: '/services/investment'},
        { name: 'Retirement Planning', href: '/services/retirement' },
        { name: 'Secure Fund', href: '/services/secure' },
        { name: 'Commodities Trading', href: "/services/commodities"},
        { name: 'Mutual Funds', href: '/services/mutualfunds'},
        { name: 'Wealth Planning', href: '/services/wealth'},
        { name: 'Insurance Planning', href: '/services/insurance'},

      ]
      
    return (
        <div className='dropdownitems relative z-50 w-64  box-border'>
            <div className='absolute top-0 w-full bg-gray-900 p-4 '>
                {solutions.map((item) => (
                    <Link
                        key={item.name}
                        to={item.href}
                        className="p-3 block rounded-md hover:bg-gray-800 hover:text-gray-900 transition ease-in-out duration-150"
                    >
                        <p className="text-base font-medium text-gray-100 ">{item.name}</p>
                    </Link>
                ))}
            </div>
            
                
        </div>
    )
}