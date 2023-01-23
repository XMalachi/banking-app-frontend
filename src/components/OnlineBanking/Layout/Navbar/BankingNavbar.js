import React from 'react'
import { useDispatch } from 'react-redux'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import "./BankingNavbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import {  logout } from '../../../Redux/Actions/UserActions'

// icons
import { BsFillDice6Fill } from "react-icons/bs";
import { BellIcon} from '@heroicons/react/outline'
import {BiHomeAlt} from "react-icons/bi"
import {FaUserCircle} from "react-icons/fa"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BankingNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOutHandler = () => {

    Swal.fire({
        title: 'Are you sure you want to log out?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            dispatch(logout)
            navigate('/')
        } 
      })
      return 
}

  return (
    <Disclosure as="nav" className="bg-gray-600">
      
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="ml-20">
                    <h1 className='flex items-center justify-start text-blue-100 text-md md:text-2xl'><BsFillDice6Fill />&nbsp;Eastdale Microfinance</h1>
                </div>
              
              
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="sm:h-6 sm:w-6 h-4 w-4" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      
                      <span>
                        <FaUserCircle  className="sm:h-6 sm:w-6 h-4 w-4 rounded-full text-blue-100"/>
                      </span>
                      
                      
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/customer/details"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logOutHandler}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className='homeIcon'>
                <Link className='home' to='/'>
                    <BiHomeAlt className='sm:h-6 sm:w-6 h-4 w-4' />
                </Link>
                    
                </div>
              </div>

            </div>
          </div>

          
        </>
      
    </Disclosure>
  )
}
export default BankingNavbar