import React, {useEffect, useState} from 'react'
import "./BankingSidebar.css"

import {BsFillCaretDownFill, BsFillRecordCircleFill} from "react-icons/bs"
import Swal from 'sweetalert2'
import { getUserAction, logout } from '../../../Redux/Actions/UserActions'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Loader'
import { Link } from 'react-router-dom'

function BankingSidebar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {store} = useSelector(state => state.loginStaff)
    
    useEffect(()=>{
        dispatch(getUserAction())
    }, [dispatch])

    const {loading, user} = useSelector(state => state.getUser)


    const [transferOptions, showTransferOptions] = useState(false)
    const [cardOptions, showCardOptions] = useState(false)
    const [loanOptions, showLoanOptions] = useState(false)

    const setShowTransferOptions = () => {
        showTransferOptions(prev => !prev)
    }
    const setShowCardOptions = () => {
        showCardOptions(prev => !prev)
    }
    const setShowLoanOptions = () => {
        showLoanOptions(prev => !prev)
    }
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
    <>
    {loading && (<Loader />)}
<div className='text-white bg-blue-900'>
        <div className="area"></div><nav className="main-menu">
            <ul>
                <li className='mb-5 mt-0 h-20 flex flex-col items-center justify-start'>
                    <Link to="/customer" className='h-full mt-0'>
                        <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text text-blue-200">
                           <p>{user? user.name : "Your Name"}</p>
                           <small>{user? user.role : "Customer"}</small>
                        </span>
                    </Link>
                  
                </li>

                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Account</h4>
                    <li className="has-subnav">
                        <Link to="/customer">
                            <i className="fa fa-th fa-2x"></i>
                            
                            <span className="nav-text">
                                Account Summary
                            </span>
                        </Link>
                        
                    </li>
                    <li className="has-subnav focus:bg-slate-100">
                        <Link to="/customer/details">
                        <i className="fa fa-credit-card fa-2x"></i>
                            <span className="nav-text">
                                Account Details
                            </span>
                        </Link>
                        
                    </li>
                </div>
                
                
                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Transactions</h4>
                    <li className="has-subnav">
                        <Link to="/customer">
                        <i className="fa fa-clipboard fa-2x"></i>
                            <span className="nav-text">
                                Inquire Transactions
                            </span>
                        </Link>
                    
                    </li>
                    <li onClick={setShowTransferOptions}>
                        <div>
                            <i className="fa fa-exchange fa-2x"></i>
                            <span className="nav-text">
                                Fund Transfer <BsFillCaretDownFill className='inline' />
                                {transferOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <Link to='/customer/transfer' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Fund Transfer</p></Link>
                                        <Link to='/customer/viewtransfer' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>View Transfers</p></Link>
                                    </ul>
                                
                                }
                                
                            </span>
                        </div>
                    </li>

                </div>
                
                <div className='my-4'>
                    <h4 className='font-semibold uppercase truncate  ml-5 mb-5'>Services</h4>
                    <li onClick={setShowCardOptions}>
                        <div>
                            <i className="fa fa-book fa-2x"></i>
                            <span className="nav-text">
                                Enroll For Card <BsFillCaretDownFill className='inline' />
                                {cardOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <Link to='/customer/card-enroll' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Enroll For Card</p></Link>
                                        <Link to='/customer/viewcard' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>View Card</p></Link>
                                    </ul>
                                
                                }
                            </span>
                        </div>
                    </li>
                    <li onClick={setShowLoanOptions}>
                    <div>
                        <i className="fa fa-shield fa-2x"></i>
                            <span className="nav-text">
                                Apply For Loan<BsFillCaretDownFill className='inline' />
                                {loanOptions && 
                                    <ul className='absolute z-50 bg-slate-50 rounded-xl text-blue-900'>
                                        <Link to='/customer/applyloan' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Apply For Loan</p></Link>
                                        <Link to='/customer/viewloans' className='option'><BsFillRecordCircleFill />&nbsp;&nbsp;<p>Show Loans</p></Link>
                                    </ul>
                                
                                }
                            </span>
                        </div>
                    </li>
                </div>
                
                
            </ul>

            <ul className="logout">
                <li>
                   <button onClick={logOutHandler} className="logOutButton">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </button>
                </li>  
            </ul>
        </nav>
    </div>
    </>
    
  )
}

export default BankingSidebar