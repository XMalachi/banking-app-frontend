import React, {useState, useEffect} from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import Navbar from '../Layout/Navbar/Navbar'
import { CREATE_USER_RESET } from '../Redux/Constants/UserConstants'
import "./Registration.css"
import { createUserAction } from '../Redux/Actions/UserActions'
import axios from 'axios'
import Loader from '../Loader'


const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [countries, setCountries] = useState([])
    const [state, setState] = useState({ 
        name:'',
        email:'', 
        password: '',
        phone: '',
        gender: '',
        birthday: '',
        address: '',
        country: '',
        occupation: '',
        photo: '',
        privacy: false
    })

    const store = useSelector((state)=> state.createUser)
    const { loading, success, user} = store;


    useEffect(()=> {
        getCountries()
      if(success=== true){
        console.log('Registration successfull')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Registration Succesfull. Contact the Help center For your unique login ID number!`,
          showConfirmButton: false,
          timer: 2000
        })
        navigate('/')
        dispatch({
          type: CREATE_USER_RESET
        })
      }

    }, [success, navigate, dispatch])


    console.log("user",user)
    

    const changeHandler = (e) => {
        const {name, type, value, checked, files} = e.target
        // const value = type === 'checkbox' ? e.target.checked : e.target.value
        if(type === 'checkbox'){
            console.log('checkbox', e.target.checked)
            setState({
                ...state, [name]:checked
            })
        }
        // type of flie
        if(type === 'file'){
            setState({
                ...state,  [name]: files[0]}
            )
        }
        
        setState({
            ...state,
            [name]:value
        })
       
    }

    console.log('state', state)

    const submitHandler = (e)=>{
    
            e.preventDefault();
     
            if(!state.name || !state.email || !state.password || !state.phone || !state.address || !state.birthday || !state.occupation || !state.gender || !state.country || !state.privacy==="on" || !state.privacy===true){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Registration Failed. Kindly fill in all required field.`,
                    showConfirmButton: false,
                    timer: 2000
                })
                return
            }


            if(!state.password.length === 6){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `Password Must be longer than 6 characters`,
                    showConfirmButton: false,
                    timer: 2000
                })
                return
            }

            dispatch(createUserAction(state.name, state.email, state.password,state.phone, state.gender, state.birthday, state.address, state.country,state.occupation,state.photo))

            setState({
                name:'',
                email:'',
                password: '',
                phone: '',
                gender: '',
                birthday: '',
                address: '',
                country: '',
                occupation: '',
                photo: ''
            })
            
    }

    
    const getCountries =  async() => {
        const thecountries = await axios.get("https://restcountries.com/v3.1/all")
        const data = thecountries.data
        const countriesData = data.map(country => country.name.common)
        setCountries(countriesData)
    }

  return (
    <div>
    {loading && (<Loader />)}
        <Navbar />
        <div className='flex flex-col items-center justify-center h-full min-h '>
            <form className="loginform space-y-8 divide-y divide-gray-200 p-10">
                <div className="space-y-8 divide-y divide-gray-200">

                    <div className="pt-8">
                        <div>
                            <h2 className="card_title_cta">EastDale Microfinance</h2>
                            <div className="line"/>
                            <p className="text-sm text-teal-200">Open a savings account online today with our easy application
                             processor. Check out what account type are available.</p>
                            
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                    
                            <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                
                                onChange={ changeHandler }
                                autoComplete="name"
                                placeholder="Your Full Name"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                        
                            <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                               
                                required
                                onChange={ changeHandler }
                                autoComplete="email"
                                placeholder="Email"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>


                        <div className="sm:col-span-6">
                          
                            <div className="mt-1">
                            <input
                                type="date"
                                name="birthday"
                                id="birthday"
                                required
                                
                                autoComplete="birthday"
                                onChange={ changeHandler }
                                placeholder="Date Of Birth"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                           
                            <div className="mt-1">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                required
                                
                                autoComplete="address"
                                onChange={ changeHandler }
                                placeholder="Address"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>
                        

                        <div className="sm:col-span-6">
                          
                            <div className="mt-1">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                
                                required
                                autoComplete="phone"
                                onChange={ changeHandler }
                                placeholder="Phone Number"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                                
                            <div className="mt-1">
                                <select
                                    id="country"
                                    name="country"
                                 
                                    required
                                    onChange={ changeHandler }
                                    autoComplete="country"
                                    className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                    >
                                    <option>--Select Country--</option>
                                    {
                                        countries.map(country => (<option value={country} key={country}>{country}</option>))
                                    }
                                    
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                                
                            <div className="mt-1">
                                <select
                                id="gender"
                                name="gender"
                                
                                required
                                onChange={ changeHandler }
                                autoComplete="gender"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                >
                                <option>--Select Gender--</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Non-Binary</option>
                                <option>Others</option>
                                
                                </select>
                            </div>
                        </div>


                        <div className="sm:col-span-6">
                    
                            <div className="mt-1">
                            <select
                                id="account"
                                name="account"
                                
                                disabled
                                onChange={ changeHandler }
                                autoComplete="account"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-900 block w-full sm:text-md "
                                >
                               
                                <option>Savings</option>
                                
                                
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                          
                            <div className="mt-1">
                            <input
                                type="text"
                                name="occupation"
                                id="occupation"
                                required
                                
                                onChange={ changeHandler }
                                autoComplete="occupation"
                                placeholder="Occupation"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                           
                            <div className="mt-1">
                            <input
                                type="file"  name="photo" id="file"
                                className="text-white p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            
                            <div className="mt-1">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                
                                minLength={6}
                                onChange={ changeHandler }
                                autoComplete="given-password"
                                placeholder="Password (Password must be longer than 6 characters)"
                                className=" p-2 border-b-2  border-blue-900  focus:border-blue-100 block w-full sm:text-md "
                            />
                            </div>
                        </div>

                        

                        
                    </div>

                    <p className='mt-10'>
                            <input
                                type="checkbox"
                                id="privacy" 
                                onChange={ changeHandler }
                                required
                                name="privacy"
                            />
                            <span className='text-white text-sm ml-2'>
                                By clicking Register, you agree to our 
                                <a 
                                href='/privacypolicies'
                                 className='text-teal-200 hover:text-blue-700 decoration-none ml-2'>
                                 Terms and Privacy Policy
                                </a>, including our Cookie Use.
                            </span>
                        </p>
                    
                </div>


                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        
                        <button
                        type="submit"
                        onClick={ submitHandler }
                        className="ml-3 inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                        >
                            Register
                        </button>
                    </div>
                </div>

                <p className='text-white'>
                    Already Registered. Kindly  
                    <a 
                        href='/login'
                        className='text-teal-200 hover:text-blue-700 decoration-none ml-2'
                    >Log In
                    </a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Registration