import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from '../Layout/Navbar/Navbar'
import { getUserAccountDetailsAction, loginUserAction } from '../Redux/Actions/UserActions'
import "./LoginForm.css"
import { LOGIN_USER_RESET } from '../Redux/Constants/UserConstants'
import Swal from 'sweetalert2'
import { getTransactionsActions } from '../Redux/Actions/TransactionActions'
import Loader from '../Loader'

function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const store = useSelector((state)=> state.loginUser)
    const { loading, success,error, user} = store;

    console.log("user from login form", store)
    const [state, setState] = useState({
        loginid:'',
        password:''
    })

          useEffect(()=> {
            if(success){ 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/customer')
                dispatch({
                    type:LOGIN_USER_RESET
                })
                dispatch(getTransactionsActions())
                dispatch(getUserAccountDetailsAction())
                return
            }else if(error){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Cannot Log In. Kindly Check Your Information`,
                    showConfirmButton: false,
                    timer: 1500
                })
                return
            }


        },[dispatch,success, navigate, error])
     
    
 
    const changeHandler = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]:value
        })
        
    }

    const submitHandler = (e)=>{
    
        e.preventDefault();

        if(!state.loginid || !state.password){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Kindly Provide Login Id and password',
                showConfirmButton: false,
                timer: 1500
            })
            
            return
        }
        

        console.log(loading, "loading state in the function")
            dispatch(loginUserAction(state.loginid, state.password))
        
            
            setState({
                loginid:'',
                password:''
            })
        
       

    }
    console.log("successful",user)

    console.log(loading, "loading state outside function")

  return (
    <>
    {loading && (<Loader />)}
    <Navbar />
    <div className='flex flex-col items-center justify-center h-full min-h '>
        <div className="loginform space-y-8 divide-y divide-gray-200 p-10">
            <div className="space-y-8 divide-y divide-gray-200">

                <div className="pt-8">
                    <div>
                        <h2 className="card_title_cta">EastDale Microfinance</h2>
                        <div className="line"/>
                        <p className="text-sm text-teal-200">Kindly provide correct login details.</p>
                        
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
               
                        <div className="mt-1">
                        <input
                            type="number"
                            name="loginid"
                            id="loginid"
                            value={state.loginid}
                            onChange={changeHandler}
                            autoComplete="given-number"
                            placeholder="Login id"
                            required
                            className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                    
                        <div className="mt-1">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={state.password}
                            onChange={changeHandler}
                            autoComplete="given-password"
                            placeholder="Password"
                            required
                            className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                        />
                        </div>
                    </div>

                    

                    
                </div>
                <p className='text-white'>
                    Not Registered. Kindly  
                    <a 
                        href='/register'
                        className='text-teal-200 hover:text-blue-700 decoration-none ml-2 outline-none border-none'
                    >Sign Up
                    </a>
                </p>
            </div>


            </div>

                <div className="pt-5">
                <div className="flex justify-end">
                    
                    <button
                    onClick={submitHandler}
                    className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    >
                    Log In
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginForm