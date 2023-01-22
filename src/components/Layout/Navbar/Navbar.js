/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInAction } from '../../Redux/Actions/UserActions'
import {FaUserCircle} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Loader from "../../Loader"
import { useOnHoverOutside } from "./useOnHoverOutside";
import Items from "./Items";


const navigation = [
  { name: 'Home', href: '/', current: false, subText: "Welcome To EastDale Finance" },
  { name: 'About Us', href: '/about', current: false, subText: "Know More About Us" },
  { name: 'Wealth Mgt', href: '/services/wealth', current: false, subText: "Wealth Management" },
  { name: 'Online Banking', href: '/login', current: false, subText: "Online Banking" },
  { name: 'Contact', href: '/contact', current: false, subText: "Get Touch With Us" },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const setOpenNavigation = () => {
      setOpenNav(prev => !prev) 
    }
    const  dispatch = useDispatch()
    const [running, setRunning]  = useState(true)
    useEffect(()=> {
  
    dispatch(isLoggedInAction())
    setTimeout(() => {
      setRunning(false)
  
    }, 3000)
    }, [dispatch,setRunning])
    
    const { user} = useSelector(state => state.isLoggedIn)
    console.log(user,  "the logged in state")

    const dropdownRef = useRef(null); 
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    // Function to close dropdown
    const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
    };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
        
  return (
  
    <>
      {
        running && <Loader />
      }
      <Disclosure as="nav" className="bg-gray-800 box-border">
            
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {openNav ? (
                    <XIcon onClick={setOpenNavigation} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon onClick={setOpenNavigation} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      
                      <Link
                        key={item.name}
                        to={item.href}
                        target={item.name === "Online Banking"? "_blank" : "_self"}
                        rel='noreferrer'
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <h2 className='text-white text-lg'>{item.name}</h2>
                        <small className='block '>{item.subText}</small>
                      </Link>
                      
                    ))
                    
                    }
                    <div ref={dropdownRef}>
                      <Link
                        to='/services'
                        className="text-gray-300 text-left hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
                      >
                        <h2 className='text-white text-lg'>Services</h2>
                        <small className='block'>Valuable Services</small>
                      </Link>

                      {isMenuDropDownOpen && <Items />}
                    </div>
                  </div>
                  
                </div>
              </div>
              
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
          
                          <span className='flex items-center justify-center ml-0 text-sm text-blue-900 px-4 py-1 hover:text-blue-100 hover:bg-slate-900 bg-blue-100 rounded-xl'><FaUserCircle  className="h-8 mr-1 w-8 rounded-full text-blue-900"/> <span className="font-bold">Log In</span> </span>
                        
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                            target="_blank"
                            rel='noreferrer'
                              to="/login"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                            target="_blank"
                            rel='noreferrer'
                              to="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                )

              
            </div>
          </div>

          {openNav && 
            <div className="lg:hidden px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  onClick={setOpenNavigation}
                  to={item.href}
                  target={item.name === "Online Banking"? "_blank" : "_self"}
                  rel='noreferrer'
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          }
           
          
        </>
      )}
    
    </Disclosure>
    </>
        

    
  )
}
export default Navbar